export interface CommitsInfo {
  sha:          string;
  node_id:      string;
  commit:       Commit;
  url:          string;
  html_url:     string;
  comments_url: string;
  author:       CommitAuthor;
  committer:    CommitAuthor;
  parents:      Parent[];
}

interface CommitAuthor {
  login:               Login;
  id:                  number;
  node_id:             NodeID;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       FollowingURL;
  gists_url:           GistsURL;
  starred_url:         StarredURL;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          EventsURL;
  received_events_url: string;
  type:                Type;
  site_admin:          boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersPPlanelloEventsPrivacy = "https://api.github.com/users/pPlanello/events{/privacy}",
  HTTPSAPIGithubCOMUsersWebFlowEventsPrivacy = "https://api.github.com/users/web-flow/events{/privacy}",
}

export enum FollowingURL {
  HTTPSAPIGithubCOMUsersPPlanelloFollowingOtherUser = "https://api.github.com/users/pPlanello/following{/other_user}",
  HTTPSAPIGithubCOMUsersWebFlowFollowingOtherUser = "https://api.github.com/users/web-flow/following{/other_user}",
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersPPlanelloGistsGistID = "https://api.github.com/users/pPlanello/gists{/gist_id}",
  HTTPSAPIGithubCOMUsersWebFlowGistsGistID = "https://api.github.com/users/web-flow/gists{/gist_id}",
}

export enum Login {
  PPlanello = "pPlanello",
  WebFlow = "web-flow",
}

export enum NodeID {
  MDQ6VXNlcjE5ODY0NDQ3 = "MDQ6VXNlcjE5ODY0NDQ3",
  MDQ6VXNlcjM2NDcyNjI0 = "MDQ6VXNlcjM2NDcyNjI0",
}

export enum StarredURL {
  HTTPSAPIGithubCOMUsersPPlanelloStarredOwnerRepo = "https://api.github.com/users/pPlanello/starred{/owner}{/repo}",
  HTTPSAPIGithubCOMUsersWebFlowStarredOwnerRepo = "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
}

export enum Type {
  User = "User",
}

interface Commit {
  author:        CommitAuthorClass;
  committer:     CommitAuthorClass;
  message:       string;
  tree:          Tree;
  url:           string;
  comment_count: number;
  verification:  Verification;
}

interface CommitAuthorClass {
  name:  Name;
  email: Email;
  date:  Date;
}

export enum Email {
  NoreplyGithubCOM = "noreply@github.com",
  Planello96GmailCOM = "planello96@gmail.com",
  The36472624PPlanelloUsersNoreplyGithubCOM = "36472624+pPlanello@users.noreply.github.com",
}

export enum Name {
  GitHub = "GitHub",
  PPlanello = "pPlanello",
  PabloPlanelló = "Pablo Planelló",
}

interface Tree {
  sha: string;
  url: string;
}

interface Verification {
  verified:  boolean;
  reason:    Reason;
  signature: null | string;
  payload:   null | string;
}

export enum Reason {
  Unsigned = "unsigned",
  Valid = "valid",
}

interface Parent {
  sha:      string;
  url:      string;
  html_url: string;
}
