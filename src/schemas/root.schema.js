import z from "zod";

/*
{
  "email": "foo@bar.no",
  "password": "Password123!"
}
*/

export const RootSchemaPostData = z.object({
    body: z.object({
        email: z.email()
            .min(8)
            .max(64),
        password: z.string()
            .min(8)
            .max(64)
    }),
    // params: z.object({

    // }),
    // query: z.object({

    // }),
});