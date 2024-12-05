import { AppBar, Button, Card, Stack, TextField, Toolbar, Typography, styled, FormControl } from '@mui/material';
import { FormEvent, useCallback, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from "react-router";
import { useAccount, useDisconnect, } from "wagmi";
import { useReadBiscoTokenBalanceOf, useWriteBiscoTokenTransfer } from "../generated.ts";
import { zeroAddress, formatEther, parseEther, isAddress } from 'viem';

// TODO: should be refactored in Layout component
const ProfileLayout = styled(Stack)(() => ({
  margin: "auto",
  height: "100dvh",
}));

const ACCOUNT_ADDRESS_PART_LENGTH = 6;

const SendCryptoContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "min(450px, 100%)",
  margin: "auto",
  padding: theme.spacing(4),
}));

const SendCryptoForm = styled(FormControl)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export default function Profile() {
  const account = useAccount();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();

  const { data: balance, error: errorTokenBalance } = useReadBiscoTokenBalanceOf({
    args: [account.address ?? zeroAddress],
  });

  const {
    writeContract,
    status: statusTokenTransfer,
    error: errorTokenTransfer,
  } = useWriteBiscoTokenTransfer();

  useEffect(() => {
    if (errorTokenBalance !== null) {
      // TODO: Better error handling should be used instead
      alert(`Error getting contract balances: ${errorTokenBalance.message}`);
    }
  }, [errorTokenBalance])

  const userBalance = useMemo(() => {
    return formatEther(balance ?? 0n);
  }, [balance]);

  if (account.address === undefined) {
    navigate("/");
  }

  let shortenedAccountAddress = "";

  if (account.address !== undefined) {
    shortenedAccountAddress = `${account.address.slice(0, ACCOUNT_ADDRESS_PART_LENGTH)}...${account.address.slice(-ACCOUNT_ADDRESS_PART_LENGTH)}`;
  }

  const onDisconnect = useCallback(async () => {
    disconnect();
  }, [disconnect]);

  const recipientField = useRef<HTMLInputElement>(null);
  const balanceField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (statusTokenTransfer === 'success') {
      alert('Send transaction completed');
    } else if (errorTokenTransfer !== null) {
      alert(`Send transaction error: ${errorTokenTransfer?.message}`);
    }
  }, [statusTokenTransfer, errorTokenTransfer]);

  const onSend = useCallback((event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    const address = recipientField.current?.value ?? '';
    if (!isAddress(address)) {
      alert('Recipient field should contain a valid eth address');
      return;
    }

    const amount = Number(balanceField.current?.value);
    if (isNaN(amount) || amount <= 0) {
      alert('Amount field should contain valid positive number');
      return;
    }

    const weiAmount = parseEther(String(amount));

    writeContract({
      args: [address, weiAmount]
    });
  }, []);

  return (
    <ProfileLayout>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography sx={{ flexGrow: 1 }}>Account: {shortenedAccountAddress}</Typography>
          <Button type="button" variant="contained" color="info" onClick={onDisconnect}>
            Disconnect
          </Button>
        </Toolbar>
      </AppBar>
      <SendCryptoContainer>
        <Typography variant="h4" textAlign="center">
          Profile
        </Typography>
        <Typography variant="h5">{userBalance} BSC available</Typography>
        <SendCryptoForm component="form" onSubmit={onSend}>
          <TextField id="recipient" inputRef={recipientField} label="Recipient address" variant="outlined" />
          <TextField id="amount" inputRef={balanceField} label="Amount to send" variant="outlined" />
          <Button disabled={statusTokenTransfer === "pending"} type="submit" variant="contained" color="primary">
            Send
          </Button>
        </SendCryptoForm>
        { statusTokenTransfer === "pending" && (
          <Typography variant="h6" color="textSecondary">Transaction in progress...</Typography>
        ) }
      </SendCryptoContainer>
    </ProfileLayout>
  );
}
