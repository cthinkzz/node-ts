export const userSearchService = async (filters: Partial<User>): Promise<User[]> => {
    // throw new Error("Namaste Dev");
    const result = await Promise.resolve([{ id: 1, name: "CP", age: 28 }])
    return result;
}

export const userCreateService = async (user: User): Promise<Pick<User, "id" | "name">> => {
    return { id: 1, name: "CP" }
}