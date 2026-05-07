import z from "zod";

/*
{
  "email": "foo@bar.no",
  "password": "Password123!"
}
*/

export const getById = z.object({
    // body: z.object({

    // }),
    params: z.object({
        id: z.uuidv4(),
    }).strict(),
    // query: z.object({

    // }),
});