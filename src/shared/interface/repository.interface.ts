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
  visibility:                  string;
  forks:                       number;
  open_issues:                 number;
  watchers:                    number;
  default_branch:              string;
  permissions:                 Permissions;
}

interface Owner {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                string;
  site_admin:          boolean;
}

interface Permissions {
  admin:    boolean;
  maintain: boolean;
  push:     boolean;
  triage:   boolean;
  pull:     boolean;
}
