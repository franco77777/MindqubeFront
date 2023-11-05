export interface User {
    id:                    number;
    password:              string;
    email:                 string;
    role:                  Role;
    enabled?:               boolean;
    username:              string;
    authorities?:           Authority[];
    credentialsNonExpired?: boolean;
    accountNonExpired?:     boolean;
    accountNonLocked?:      boolean;
}

export interface UserDatabaseResponse {
    id:    number;
    email: string;
    token: string;
    role:  Role;
}

export interface RoleDatabaseResponse {
    role: string;
}

export interface Authority {
    authority: string;
}

export interface Role {
    id:   number;
    role: string;
}

export interface GoogleData {
	email:           string|null,
    emailVerified:   boolean|null,
	photoURL:        string|null;
}