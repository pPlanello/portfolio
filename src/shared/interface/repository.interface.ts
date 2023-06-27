export interface Repository {
  id:                          number;
  name:                        string;
  full_name:                   string;
  private:                     boolean;
  owner:                       Owner;
  html_url:                    string;
  description:                 null | string;
  url:                         string;
  created_at:                  Date;
  updated_at:                  Date;
  pushed_at:                   Date;
  git_url:                     string;
  ssh_url:                     string;
  clone_url:                   string;
  svn_url:                     string;
  homepage:                    null | string;
  size:                        number;
  stargazers_count:            number;
  watchers_count:              number;
  language:                    null | string;
  has_issues:                  boolean;
  has_projects:                boolean;
  has_downloads:               boolean;
  has_wiki:                    boolean;
  has_pages:                   boolean;
  has_discussions:             boolean;
  forks_count:                 number;
  mirror_url:                  null;
  archived:                    boolean;
  disabled:                    boolean;
  open_issues_count:           number;
  license:                     null;
  allow_forking:               boolean;
  is_template:                 boolean;
  web_commit_signoff_required: boolean;
  topics:                      string[];
  visibility:                  Visibility;
  forks:                       number;
  open_issues:                 number;
  watchers:                    number;
  default_branch:              DefaultBranch;
  permissions:                 Permissions;
}

enum DefaultBranch {
  Master = "master",
}

interface Owner {
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

enum EventsURL {
  HTTPSAPIGithubCOMUsersPPlanelloEventsPrivacy = "https://api.github.com/users/pPlanello/events{/privacy}",
}

enum FollowingURL {
  HTTPSAPIGithubCOMUsersPPlanelloFollowingOtherUser = "https://api.github.com/users/pPlanello/following{/other_user}",
}

enum GistsURL {
  HTTPSAPIGithubCOMUsersPPlanelloGistsGistID = "https://api.github.com/users/pPlanello/gists{/gist_id}",
}

enum Login {
  PPlanello = "pPlanello",
}

enum NodeID {
  MDQ6VXNlcjM2NDcyNjI0 = "MDQ6VXNlcjM2NDcyNjI0",
}

enum StarredURL {
  HTTPSAPIGithubCOMUsersPPlanelloStarredOwnerRepo = "https://api.github.com/users/pPlanello/starred{/owner}{/repo}",
}

enum Type {
  User = "User",
}

interface Permissions {
  admin:    boolean;
  maintain: boolean;
  push:     boolean;
  triage:   boolean;
  pull:     boolean;
}

enum Visibility {
  Public = "public",
}
