import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password" },
      },
      authorize(credentials, req) {
        // Perform database operations, for now, statically check

        if (
          credentials?.email === "admin@example.com" &&
          credentials.password === "admin"
        ) {
          return {
            id: "1",
            email: "admin@example.com",
          };
        } else if (
          credentials?.email === "abc@gmail.com" &&
          credentials.password === "abc"
        ) {
          return {
            id: "2",
            email: "abc@gmail.com",
          };
        }

        return null;
      },
    }),
  ],
};
