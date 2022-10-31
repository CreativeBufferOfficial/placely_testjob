import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Upload: any;
};

export type AccountSchema = {
  __typename?: 'AccountSchema';
  accountTypeId: Scalars['Int'];
  accountTypes: AccountTypeSchema;
  accountsEmail: Scalars['String'];
  address: Scalars['String'];
  businessName: Scalars['String'];
  city: Scalars['String'];
  countryId: Scalars['Int'];
  countryInfo: CountrySchema;
  createdAt: Scalars['DateTime'];
  entities: EntitySchema;
  entityId: Scalars['Int'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  state: Scalars['String'];
  supportEmail: Scalars['String'];
  userId: Scalars['String'];
  userInfo: UserDetailsSchema;
  zipCode: Scalars['String'];
};

export enum AccountStatusEnum {
  AccountCreated = 'ACCOUNT_CREATED',
  AccountDeleted = 'ACCOUNT_DELETED',
  AccountExists = 'ACCOUNT_EXISTS',
  AccountFound = 'ACCOUNT_FOUND',
  AccountIdRequired = 'ACCOUNT_ID_REQUIRED',
  AccountNotCreated = 'ACCOUNT_NOT_CREATED',
  AccountNotDeleted = 'ACCOUNT_NOT_DELETED',
  AccountNotFound = 'ACCOUNT_NOT_FOUND',
  AccountNotUpdated = 'ACCOUNT_NOT_UPDATED',
  AccountUpdated = 'ACCOUNT_UPDATED',
  WrongUserId = 'WRONG_USER_ID'
}

export type AccountStatusSchema = {
  __typename?: 'AccountStatusSchema';
  status: AccountStatusEnum;
};

export type AccountTypeSchema = {
  __typename?: 'AccountTypeSchema';
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
};

export enum ClientNameEnum {
  Google = 'GOOGLE',
  Microsoft = 'MICROSOFT'
}

export type CountrySchema = {
  __typename?: 'CountrySchema';
  code: Scalars['String'];
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  phoneCode: Scalars['String'];
};

export enum EmailStatusEnum {
  MailNotRequired = 'MAIL_NOT_REQUIRED',
  MailNotSent = 'MAIL_NOT_SENT',
  MailNotSentMaxEmailsExceeded = 'MAIL_NOT_SENT_MAX_EMAILS_EXCEEDED',
  MailNotSentUnknownError = 'MAIL_NOT_SENT_UNKNOWN_ERROR',
  MailNotSentUserDeleted = 'MAIL_NOT_SENT_USER_DELETED',
  MailNotSentUserNotFound = 'MAIL_NOT_SENT_USER_NOT_FOUND',
  MailSent = 'MAIL_SENT'
}

export type EntitySchema = {
  __typename?: 'EntitySchema';
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
};

export type ImageSchema = {
  __typename?: 'ImageSchema';
  email: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  status: UserStatusEnum;
};

export type Mutations = {
  __typename?: 'Mutations';
  accountHandler: AccountStatusSchema;
  changePassword: UserStatusSchema;
  deleteProfileImage: ImageSchema;
  permaDelete: UserStatusSchema;
  resetPassword: UserStatusSchema;
  signUp: UserStatusSchema;
  signUpWithSso: UserStatusSchema;
  subscribePlacelyLaunch: PlacelyLaunchSubscriptionSchema;
  updateUser: UserStatusSchema;
  uploadProfileImage: ImageSchema;
  verifyEmail: UserStatusSchema;
};


export type MutationsAccountHandlerArgs = {
  accountTypeId?: InputMaybe<Scalars['Int']>;
  accountsEmail?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  businessName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['Int']>;
  entityId?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  lastModifiedBy?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  supportEmail?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};


export type MutationsChangePasswordArgs = {
  email: Scalars['String'];
  newPwd: Scalars['String'];
  oldPwd: Scalars['String'];
};


export type MutationsDeleteProfileImageArgs = {
  email: Scalars['String'];
};


export type MutationsPermaDeleteArgs = {
  email: Scalars['String'];
};


export type MutationsResetPasswordArgs = {
  pwd: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
};


export type MutationsSignUpArgs = {
  clientname?: InputMaybe<ClientNameEnum>;
  email: Scalars['String'];
  pwd?: InputMaybe<Scalars['String']>;
  validator: ValidatorEnum;
};


export type MutationsSignUpWithSsoArgs = {
  clientname: ClientNameEnum;
  email: Scalars['String'];
};


export type MutationsSubscribePlacelyLaunchArgs = {
  email: Scalars['String'];
};


export type MutationsUpdateUserArgs = {
  countryId?: InputMaybe<Scalars['Int']>;
  dateFormat?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isStaff?: InputMaybe<Scalars['Boolean']>;
  isSuperUser?: InputMaybe<Scalars['Boolean']>;
  lastModifiedBy?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  ssoClient?: InputMaybe<Scalars['String']>;
  timeFormat?: InputMaybe<Scalars['String']>;
  timeZoneId?: InputMaybe<Scalars['Int']>;
};


export type MutationsUploadProfileImageArgs = {
  email: Scalars['String'];
  filePath: Scalars['Upload'];
};


export type MutationsVerifyEmailArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export enum PlacelyLaunchEnum {
  AlreadySubscribed = 'ALREADY_SUBSCRIBED',
  NotSubscribed = 'NOT_SUBSCRIBED',
  Subscribed = 'SUBSCRIBED'
}

export type PlacelyLaunchSubscriptionSchema = {
  __typename?: 'PlacelyLaunchSubscriptionSchema';
  status: PlacelyLaunchEnum;
};

export type Query = {
  __typename?: 'Query';
  accountTypes: Array<AccountTypeSchema>;
  accountsByUser: AccountSchema;
  countries: Array<CountrySchema>;
  entities: Array<EntitySchema>;
  refreshTokens: UserStatusSchema;
  resetPwd: UserStatusSchema;
  signIn: UserSchema;
  timeZones: Array<TimeZoneSchema>;
};


export type QueryAccountsByUserArgs = {
  userId: Scalars['String'];
};


export type QueryRefreshTokensArgs = {
  email: Scalars['String'];
  verificationType: Scalars['String'];
};


export type QueryResetPwdArgs = {
  email: Scalars['String'];
};


export type QuerySignInArgs = {
  email: Scalars['String'];
  pwd?: InputMaybe<Scalars['String']>;
  validator: ValidatorEnum;
};

export type TimeZoneSchema = {
  __typename?: 'TimeZoneSchema';
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  timezone: Scalars['String'];
  useDayLight: Scalars['Boolean'];
};

export type UserDetailsSchema = {
  __typename?: 'UserDetailsSchema';
  id: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
};

export type UserSchema = {
  __typename?: 'UserSchema';
  countryId: Scalars['Int'];
  countryInfo: CountrySchema;
  createdAt: Scalars['DateTime'];
  dateFormat: Scalars['String'];
  dateOfBirth: Scalars['String'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  firstName: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  isStaff: Scalars['Boolean'];
  isSuperUser: Scalars['Boolean'];
  lastModifiedAt: Scalars['DateTime'];
  lastModifiedBy: Scalars['String'];
  lastName: Scalars['String'];
  middleName: Scalars['String'];
  phoneNumber: Scalars['String'];
  ssoClient: Scalars['String'];
  timeFormat: Scalars['String'];
  timeZoneId: Scalars['Int'];
  timeZoneInfo: TimeZoneSchema;
  token: Scalars['String'];
};

export enum UserStatusEnum {
  UserAlreadyExists = 'USER_ALREADY_EXISTS',
  UserAlreadyVerified = 'USER_ALREADY_VERIFIED',
  UserAuthenticated = 'USER_AUTHENTICATED',
  UserAuthorized = 'USER_AUTHORIZED',
  UserCreated = 'USER_CREATED',
  UserDeleted = 'USER_DELETED',
  UserEmailNotVerified = 'USER_EMAIL_NOT_VERIFIED',
  UserEmailVerified = 'USER_EMAIL_VERIFIED',
  UserFound = 'USER_FOUND',
  UserImageDeleted = 'USER_IMAGE_DELETED',
  UserImageFound = 'USER_IMAGE_FOUND',
  UserImageNotDeleted = 'USER_IMAGE_NOT_DELETED',
  UserImageNotFound = 'USER_IMAGE_NOT_FOUND',
  UserImageNotUploaded = 'USER_IMAGE_NOT_UPLOADED',
  UserImageUploaded = 'USER_IMAGE_UPLOADED',
  UserNotAuthenticated = 'USER_NOT_AUTHENTICATED',
  UserNotAuthorized = 'USER_NOT_AUTHORIZED',
  UserNotCreated = 'USER_NOT_CREATED',
  UserNotDeleted = 'USER_NOT_DELETED',
  UserNotFound = 'USER_NOT_FOUND',
  UserNotUpdated = 'USER_NOT_UPDATED',
  UserNotVerified = 'USER_NOT_VERIFIED',
  UserOldPasswordMismatch = 'USER_OLD_PASSWORD_MISMATCH',
  UserPasswordNotUpdated = 'USER_PASSWORD_NOT_UPDATED',
  UserPasswordUpdated = 'USER_PASSWORD_UPDATED',
  UserSignedOut = 'USER_SIGNED_OUT',
  UserTokenMismatch = 'USER_TOKEN_MISMATCH',
  UserUpdated = 'USER_UPDATED',
  UserVerified = 'USER_VERIFIED'
}

export type UserStatusSchema = {
  __typename?: 'UserStatusSchema';
  email: Scalars['String'];
  emailStatus: EmailStatusEnum;
  status: UserStatusEnum;
};

export enum ValidatorEnum {
  Password = 'PASSWORD',
  Sso = 'SSO'
}

export type SignUpMutationMutationVariables = Exact<{
  email: Scalars['String'];
  pwd: Scalars['String'];
}>;


export type SignUpMutationMutation = { __typename?: 'Mutations', signUp: { __typename?: 'UserStatusSchema', email: string, emailStatus: EmailStatusEnum, status: UserStatusEnum } };

export type SignInQueryQueryVariables = Exact<{
  email: Scalars['String'];
  pwd: Scalars['String'];
}>;


export type SignInQueryQuery = { __typename?: 'Query', signIn: { __typename?: 'UserSchema', email: string } };


export const SignUpMutationDocument = gql`
    mutation SignUpMutation($email: String!, $pwd: String!) {
  signUp(email: $email, validator: PASSWORD, pwd: $pwd) {
    email
    emailStatus
    status
  }
}
    `;
export type SignUpMutationMutationFn = Apollo.MutationFunction<SignUpMutationMutation, SignUpMutationMutationVariables>;

/**
 * __useSignUpMutationMutation__
 *
 * To run a mutation, you first call `useSignUpMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutationMutation, { data, loading, error }] = useSignUpMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      pwd: // value for 'pwd'
 *   },
 * });
 */
export function useSignUpMutationMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutationMutation, SignUpMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutationMutation, SignUpMutationMutationVariables>(SignUpMutationDocument, options);
      }
export type SignUpMutationMutationHookResult = ReturnType<typeof useSignUpMutationMutation>;
export type SignUpMutationMutationResult = Apollo.MutationResult<SignUpMutationMutation>;
export type SignUpMutationMutationOptions = Apollo.BaseMutationOptions<SignUpMutationMutation, SignUpMutationMutationVariables>;
export const SignInQueryDocument = gql`
    query SignInQuery($email: String!, $pwd: String!) {
  signIn(email: $email, validator: PASSWORD, pwd: $pwd) {
    email
  }
}
    `;

/**
 * __useSignInQueryQuery__
 *
 * To run a query within a React component, call `useSignInQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSignInQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSignInQueryQuery({
 *   variables: {
 *      email: // value for 'email'
 *      pwd: // value for 'pwd'
 *   },
 * });
 */
export function useSignInQueryQuery(baseOptions: Apollo.QueryHookOptions<SignInQueryQuery, SignInQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SignInQueryQuery, SignInQueryQueryVariables>(SignInQueryDocument, options);
      }
export function useSignInQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SignInQueryQuery, SignInQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SignInQueryQuery, SignInQueryQueryVariables>(SignInQueryDocument, options);
        }
export type SignInQueryQueryHookResult = ReturnType<typeof useSignInQueryQuery>;
export type SignInQueryLazyQueryHookResult = ReturnType<typeof useSignInQueryLazyQuery>;
export type SignInQueryQueryResult = Apollo.QueryResult<SignInQueryQuery, SignInQueryQueryVariables>;