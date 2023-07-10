export interface BranchesInfo {
  name:           string;
  commit:         Commit;
  protected:      boolean;
  protection:     Protection;
  protection_url: string;
}

interface Commit {
  sha: string;
  url: string;
}

interface Protection {
  enabled:                boolean;
  required_status_checks: RequiredStatusChecks;
}

interface RequiredStatusChecks {
  enforcement_level: string;
  contexts:          any[];
  checks:            any[];
}
