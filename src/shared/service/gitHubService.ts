import { Octokit } from "octokit";
import { OctokitResponse } from "@octokit/types";
import { Repository } from "../interface/repository.interface";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})


export const getAllRepositories = async (owner: string): Promise<OctokitResponse<Repository[]>> => {
  return octokit.request('GET /users/{owner}/repos', {
    owner
  })
}