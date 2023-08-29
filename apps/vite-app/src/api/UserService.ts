import { GetMeResponse, GetUserResponse, SearchUsersResponse } from "api-types"

import { CreateApiService } from "@/api/ApiService"

const UserService = CreateApiService({
  baseURL: "/users",
})

// GET
export function getMe() {
  return UserService.get<GetMeResponse>("/me").then((res) => res.data.data)
}
export function searchUsers(searchTerm: string) {
  return UserService.get<SearchUsersResponse>(
    `/search?searchTerm=${searchTerm}`
  ).then((res) => res.data.data)
}

export function getUser(userId: number) {
  return UserService.get<GetUserResponse>(`/${userId}`).then(
    (res) => res.data.data
  )
}

// POST

// PUT

// DELETE

export default UserService
