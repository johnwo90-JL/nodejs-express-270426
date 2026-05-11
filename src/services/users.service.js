import { randomUUID } from "node:crypto";


const users = [{
    id: randomUUID(),
    username: "Foobar",
    email: "foo@bar.com",
    password: "N/A",
    createdAt: Date.now() - 24 * 60 * 60 * 1000,
    updatedAt: Date.now(),
}];

console.log(`Created ${users.length} mocked users:`);
users.forEach(user => console.log(`User "${user.username}, id: "${user.id}".`));

export function getById(id) {
    const filtered = users.filter(e => e.id === id);

    return filtered[0] ?? null;
}

export function getAll() {
    return users;
}