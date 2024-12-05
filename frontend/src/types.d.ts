import type { Buffer } from "buffer";

type BufferClass = typeof Buffer;

declare global {
  var Buffer: BufferClass;
}
