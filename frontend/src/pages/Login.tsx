import { Button, Card as MuiCard, Stack, Typography, styled } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAccount, useConnect } from "wagmi";

// TODO: should be refactored in Layout component
const LoginLayout = styled(Stack)(({ theme }) => ({
  margin: "auto",
  height: "100dvh",
  padding: theme.spacing(2),
}));

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "min(450px, 100%)",
  margin: "auto",
  padding: theme.spacing(4),
}));

export default function Login() {
  const navigate = useNavigate();
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();

  useEffect(() => {
    if (error !== null) {
      // TODO: Better error handling should be used instead
      alert(`Error while connecting wallet: ${error.message}`);
    }
  }, [error]);

  useEffect(() => {
    if (account.address !== undefined) {
      navigate("/profile");
    }
  }, [account, navigate]);

  return (
    <LoginLayout justifyContent="center" alignItems="center">
      <Card variant="outlined">
        <Typography component="h1" variant="h4" textAlign="center">
          {status === "pending" ? "Connecting..." : "Connect Wallet"}
        </Typography>
        {connectors.map((connector) => (
          <Button
            key={connector.uid}
            type="button"
            fullWidth
            variant="contained"
            onClick={() => connect({ connector })}
          >
            {connector.name}
          </Button>
        ))}
      </Card>
    </LoginLayout>
  );
}
