import { Octokit } from "octokit";
import { OctokitResponse } from "@octokit/types";
import { Repository } from "../interface/repository.interface";
import { CommitsInfo } from "../interface/commits.interface";
import { BranchesInfo } from "../interface/branches.interface";
import { LanguagesInfo } from "../interface/languages.interface";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})


export const getAllRepositories = (owner: string): Promise<OctokitResponse<Repository[]>> => {
  return octokit.request('GET /users/{owner}/repos?sort=created', {
    owner
  })
}

export const getCommitsBy = (owner: string, projectName: string): Promise<OctokitResponse<CommitsInfo[]>> => {
  return octokit.request('GET /repos/{owner}/{projectName}/commits', {
    owner,
    projectName
  })
}

export const getBranchesBy = (owner: string, projectName: string): Promise<OctokitResponse<BranchesInfo[]>> => {
  return octokit.request('GET /repos/{owner}/{projectName}/branches', {
    owner,
    projectName
  })
}

export const getLanguagesBy = async (owner: string, projectName: string): Promise<LanguagesInfo> => {
  try {
    const languagesResponse = await octokit.request('GET /repos/{owner}/{projectName}/languages', {
      owner,
      projectName
    });

    return languagesResponse.data
  } catch (error) {
    console.error(error)
    return {}
  }
}

export const getImageURLFromProjectRepository = (
	owner: string,
	projectName: string,
): string => {
	return `https://raw.githubusercontent.com/${owner}/${projectName}/master/image/image-project.png`
}