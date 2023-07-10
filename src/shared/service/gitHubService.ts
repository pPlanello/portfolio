import { Octokit } from "octokit";
import { OctokitResponse } from "@octokit/types";
import { Repository } from "../interface/repository.interface";
import { CommitsInfo } from "../interface/commits.interface";
import { BranchesInfo } from "../interface/branches.interface";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})


export const getAllRepositories = async (owner: string): Promise<OctokitResponse<Repository[]>> => {
  return octokit.request('GET /users/{owner}/repos', {
    owner
  })
}

export const getCommitsBy = async (owner: string, projectName: string): Promise<OctokitResponse<CommitsInfo[]>> => {
  return octokit.request('GET /repos/{owner}/{projectName}/commits', {
    owner,
    projectName
  })
}

export const getBranchesBy = async (owner: string, projectName: string): Promise<OctokitResponse<BranchesInfo[]>> => {
  return octokit.request('GET /repos/{owner}/{projectName}/branches', {
    owner,
    projectName
  })
}

export const getImageURLFromProjectRepository = (
	owner: string,
	projectName: string,
): string => {
	return `https://raw.githubusercontent.com/${owner}/${projectName}/master/image/image-project.png`
}