import { join } from "path"

export const PROTO_PATHS: Record<string, string> = {
    AUTH: join(__dirname, "../../proto/auth.proto")
} as const