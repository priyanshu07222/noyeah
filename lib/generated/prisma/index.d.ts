
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Contest
 * 
 */
export type Contest = $Result.DefaultSelection<Prisma.$ContestPayload>
/**
 * Model Participation
 * 
 */
export type Participation = $Result.DefaultSelection<Prisma.$ParticipationPayload>
/**
 * Model Winner
 * 
 */
export type Winner = $Result.DefaultSelection<Prisma.$WinnerPayload>
/**
 * Model TxnHistory
 * 
 */
export type TxnHistory = $Result.DefaultSelection<Prisma.$TxnHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ContestStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  COMPLETED: 'COMPLETED'
};

export type ContestStatus = (typeof ContestStatus)[keyof typeof ContestStatus]


export const TxnType: {
  CONTEST_CREATION_FEE: 'CONTEST_CREATION_FEE',
  PARTICIPATION_FEE: 'PARTICIPATION_FEE'
};

export type TxnType = (typeof TxnType)[keyof typeof TxnType]


export const TxnStatus: {
  SUCCESS: 'SUCCESS',
  PENDING: 'PENDING',
  FAILED: 'FAILED'
};

export type TxnStatus = (typeof TxnStatus)[keyof typeof TxnStatus]


export const Answerenum: {
  YES: 'YES',
  NO: 'NO'
};

export type Answerenum = (typeof Answerenum)[keyof typeof Answerenum]

}

export type ContestStatus = $Enums.ContestStatus

export const ContestStatus: typeof $Enums.ContestStatus

export type TxnType = $Enums.TxnType

export const TxnType: typeof $Enums.TxnType

export type TxnStatus = $Enums.TxnStatus

export const TxnStatus: typeof $Enums.TxnStatus

export type Answerenum = $Enums.Answerenum

export const Answerenum: typeof $Enums.Answerenum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contest`: Exposes CRUD operations for the **Contest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contests
    * const contests = await prisma.contest.findMany()
    * ```
    */
  get contest(): Prisma.ContestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participation`: Exposes CRUD operations for the **Participation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participations
    * const participations = await prisma.participation.findMany()
    * ```
    */
  get participation(): Prisma.ParticipationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.winner`: Exposes CRUD operations for the **Winner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Winners
    * const winners = await prisma.winner.findMany()
    * ```
    */
  get winner(): Prisma.WinnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.txnHistory`: Exposes CRUD operations for the **TxnHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TxnHistories
    * const txnHistories = await prisma.txnHistory.findMany()
    * ```
    */
  get txnHistory(): Prisma.TxnHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Contest: 'Contest',
    Participation: 'Participation',
    Winner: 'Winner',
    TxnHistory: 'TxnHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "contest" | "participation" | "winner" | "txnHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Contest: {
        payload: Prisma.$ContestPayload<ExtArgs>
        fields: Prisma.ContestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findFirst: {
            args: Prisma.ContestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          findMany: {
            args: Prisma.ContestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          create: {
            args: Prisma.ContestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          createMany: {
            args: Prisma.ContestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          delete: {
            args: Prisma.ContestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          update: {
            args: Prisma.ContestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          deleteMany: {
            args: Prisma.ContestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>[]
          }
          upsert: {
            args: Prisma.ContestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContestPayload>
          }
          aggregate: {
            args: Prisma.ContestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContest>
          }
          groupBy: {
            args: Prisma.ContestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContestCountArgs<ExtArgs>
            result: $Utils.Optional<ContestCountAggregateOutputType> | number
          }
        }
      }
      Participation: {
        payload: Prisma.$ParticipationPayload<ExtArgs>
        fields: Prisma.ParticipationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          findFirst: {
            args: Prisma.ParticipationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          findMany: {
            args: Prisma.ParticipationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          create: {
            args: Prisma.ParticipationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          createMany: {
            args: Prisma.ParticipationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          delete: {
            args: Prisma.ParticipationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          update: {
            args: Prisma.ParticipationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          deleteMany: {
            args: Prisma.ParticipationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          upsert: {
            args: Prisma.ParticipationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          aggregate: {
            args: Prisma.ParticipationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipation>
          }
          groupBy: {
            args: Prisma.ParticipationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipationCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipationCountAggregateOutputType> | number
          }
        }
      }
      Winner: {
        payload: Prisma.$WinnerPayload<ExtArgs>
        fields: Prisma.WinnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WinnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WinnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findFirst: {
            args: Prisma.WinnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WinnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          findMany: {
            args: Prisma.WinnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          create: {
            args: Prisma.WinnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          createMany: {
            args: Prisma.WinnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WinnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          delete: {
            args: Prisma.WinnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          update: {
            args: Prisma.WinnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          deleteMany: {
            args: Prisma.WinnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WinnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WinnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>[]
          }
          upsert: {
            args: Prisma.WinnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WinnerPayload>
          }
          aggregate: {
            args: Prisma.WinnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWinner>
          }
          groupBy: {
            args: Prisma.WinnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<WinnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.WinnerCountArgs<ExtArgs>
            result: $Utils.Optional<WinnerCountAggregateOutputType> | number
          }
        }
      }
      TxnHistory: {
        payload: Prisma.$TxnHistoryPayload<ExtArgs>
        fields: Prisma.TxnHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TxnHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TxnHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload>
          }
          findFirst: {
            args: Prisma.TxnHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TxnHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload>
          }
          findMany: {
            args: Prisma.TxnHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload>[]
          }
          create: {
            args: Prisma.TxnHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload>
          }
          createMany: {
            args: Prisma.TxnHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TxnHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload>[]
          }
          delete: {
            args: Prisma.TxnHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload>
          }
          update: {
            args: Prisma.TxnHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TxnHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TxnHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TxnHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TxnHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TxnHistoryPayload>
          }
          aggregate: {
            args: Prisma.TxnHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTxnHistory>
          }
          groupBy: {
            args: Prisma.TxnHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TxnHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TxnHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TxnHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    contest?: ContestOmit
    participation?: ParticipationOmit
    winner?: WinnerOmit
    txnHistory?: TxnHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    contestsCreated: number
    participations: number
    txns: number
    winners: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contestsCreated?: boolean | UserCountOutputTypeCountContestsCreatedArgs
    participations?: boolean | UserCountOutputTypeCountParticipationsArgs
    txns?: boolean | UserCountOutputTypeCountTxnsArgs
    winners?: boolean | UserCountOutputTypeCountWinnersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContestsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTxnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TxnHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
  }


  /**
   * Count Type ContestCountOutputType
   */

  export type ContestCountOutputType = {
    participations: number
    winners: number
    txnHistory: number
  }

  export type ContestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participations?: boolean | ContestCountOutputTypeCountParticipationsArgs
    winners?: boolean | ContestCountOutputTypeCountWinnersArgs
    txnHistory?: boolean | ContestCountOutputTypeCountTxnHistoryArgs
  }

  // Custom InputTypes
  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContestCountOutputType
     */
    select?: ContestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountWinnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
  }

  /**
   * ContestCountOutputType without action
   */
  export type ContestCountOutputTypeCountTxnHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TxnHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    walletAddress: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    walletAddress: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    walletAddress: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    walletAddress?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    walletAddress?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    walletAddress?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    name: string | null
    walletAddress: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    walletAddress?: boolean
    createdAt?: boolean
    contestsCreated?: boolean | User$contestsCreatedArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    txns?: boolean | User$txnsArgs<ExtArgs>
    winners?: boolean | User$winnersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    walletAddress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    walletAddress?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    walletAddress?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "walletAddress" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contestsCreated?: boolean | User$contestsCreatedArgs<ExtArgs>
    participations?: boolean | User$participationsArgs<ExtArgs>
    txns?: boolean | User$txnsArgs<ExtArgs>
    winners?: boolean | User$winnersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      contestsCreated: Prisma.$ContestPayload<ExtArgs>[]
      participations: Prisma.$ParticipationPayload<ExtArgs>[]
      txns: Prisma.$TxnHistoryPayload<ExtArgs>[]
      winners: Prisma.$WinnerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      name: string | null
      walletAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contestsCreated<T extends User$contestsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$contestsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participations<T extends User$participationsArgs<ExtArgs> = {}>(args?: Subset<T, User$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    txns<T extends User$txnsArgs<ExtArgs> = {}>(args?: Subset<T, User$txnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winners<T extends User$winnersArgs<ExtArgs> = {}>(args?: Subset<T, User$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly walletAddress: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.contestsCreated
   */
  export type User$contestsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    where?: ContestWhereInput
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    cursor?: ContestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * User.participations
   */
  export type User$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    cursor?: ParticipationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * User.txns
   */
  export type User$txnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    where?: TxnHistoryWhereInput
    orderBy?: TxnHistoryOrderByWithRelationInput | TxnHistoryOrderByWithRelationInput[]
    cursor?: TxnHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TxnHistoryScalarFieldEnum | TxnHistoryScalarFieldEnum[]
  }

  /**
   * User.winners
   */
  export type User$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Contest
   */

  export type AggregateContest = {
    _count: ContestCountAggregateOutputType | null
    _avg: ContestAvgAggregateOutputType | null
    _sum: ContestSumAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  export type ContestAvgAggregateOutputType = {
    entryAmount: number | null
    totalPool: number | null
  }

  export type ContestSumAggregateOutputType = {
    entryAmount: number | null
    totalPool: number | null
  }

  export type ContestMinAggregateOutputType = {
    id: string | null
    title: string | null
    entryAmount: number | null
    creatorId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.ContestStatus | null
    totalPool: number | null
    createdAt: Date | null
  }

  export type ContestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    entryAmount: number | null
    creatorId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.ContestStatus | null
    totalPool: number | null
    createdAt: Date | null
  }

  export type ContestCountAggregateOutputType = {
    id: number
    title: number
    entryAmount: number
    creatorId: number
    startTime: number
    endTime: number
    status: number
    totalPool: number
    createdAt: number
    _all: number
  }


  export type ContestAvgAggregateInputType = {
    entryAmount?: true
    totalPool?: true
  }

  export type ContestSumAggregateInputType = {
    entryAmount?: true
    totalPool?: true
  }

  export type ContestMinAggregateInputType = {
    id?: true
    title?: true
    entryAmount?: true
    creatorId?: true
    startTime?: true
    endTime?: true
    status?: true
    totalPool?: true
    createdAt?: true
  }

  export type ContestMaxAggregateInputType = {
    id?: true
    title?: true
    entryAmount?: true
    creatorId?: true
    startTime?: true
    endTime?: true
    status?: true
    totalPool?: true
    createdAt?: true
  }

  export type ContestCountAggregateInputType = {
    id?: true
    title?: true
    entryAmount?: true
    creatorId?: true
    startTime?: true
    endTime?: true
    status?: true
    totalPool?: true
    createdAt?: true
    _all?: true
  }

  export type ContestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contest to aggregate.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contests
    **/
    _count?: true | ContestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContestMaxAggregateInputType
  }

  export type GetContestAggregateType<T extends ContestAggregateArgs> = {
        [P in keyof T & keyof AggregateContest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContest[P]>
      : GetScalarType<T[P], AggregateContest[P]>
  }




  export type ContestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContestWhereInput
    orderBy?: ContestOrderByWithAggregationInput | ContestOrderByWithAggregationInput[]
    by: ContestScalarFieldEnum[] | ContestScalarFieldEnum
    having?: ContestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContestCountAggregateInputType | true
    _avg?: ContestAvgAggregateInputType
    _sum?: ContestSumAggregateInputType
    _min?: ContestMinAggregateInputType
    _max?: ContestMaxAggregateInputType
  }

  export type ContestGroupByOutputType = {
    id: string
    title: string
    entryAmount: number
    creatorId: string
    startTime: Date
    endTime: Date
    status: $Enums.ContestStatus
    totalPool: number
    createdAt: Date
    _count: ContestCountAggregateOutputType | null
    _avg: ContestAvgAggregateOutputType | null
    _sum: ContestSumAggregateOutputType | null
    _min: ContestMinAggregateOutputType | null
    _max: ContestMaxAggregateOutputType | null
  }

  type GetContestGroupByPayload<T extends ContestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContestGroupByOutputType[P]>
            : GetScalarType<T[P], ContestGroupByOutputType[P]>
        }
      >
    >


  export type ContestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    entryAmount?: boolean
    creatorId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    totalPool?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    participations?: boolean | Contest$participationsArgs<ExtArgs>
    winners?: boolean | Contest$winnersArgs<ExtArgs>
    txnHistory?: boolean | Contest$txnHistoryArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contest"]>

  export type ContestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    entryAmount?: boolean
    creatorId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    totalPool?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contest"]>

  export type ContestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    entryAmount?: boolean
    creatorId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    totalPool?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contest"]>

  export type ContestSelectScalar = {
    id?: boolean
    title?: boolean
    entryAmount?: boolean
    creatorId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    totalPool?: boolean
    createdAt?: boolean
  }

  export type ContestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "entryAmount" | "creatorId" | "startTime" | "endTime" | "status" | "totalPool" | "createdAt", ExtArgs["result"]["contest"]>
  export type ContestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    participations?: boolean | Contest$participationsArgs<ExtArgs>
    winners?: boolean | Contest$winnersArgs<ExtArgs>
    txnHistory?: boolean | Contest$txnHistoryArgs<ExtArgs>
    _count?: boolean | ContestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contest"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      participations: Prisma.$ParticipationPayload<ExtArgs>[]
      winners: Prisma.$WinnerPayload<ExtArgs>[]
      txnHistory: Prisma.$TxnHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      entryAmount: number
      creatorId: string
      startTime: Date
      endTime: Date
      status: $Enums.ContestStatus
      totalPool: number
      createdAt: Date
    }, ExtArgs["result"]["contest"]>
    composites: {}
  }

  type ContestGetPayload<S extends boolean | null | undefined | ContestDefaultArgs> = $Result.GetResult<Prisma.$ContestPayload, S>

  type ContestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContestCountAggregateInputType | true
    }

  export interface ContestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contest'], meta: { name: 'Contest' } }
    /**
     * Find zero or one Contest that matches the filter.
     * @param {ContestFindUniqueArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContestFindUniqueArgs>(args: SelectSubset<T, ContestFindUniqueArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContestFindUniqueOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContestFindUniqueOrThrowArgs>(args: SelectSubset<T, ContestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContestFindFirstArgs>(args?: SelectSubset<T, ContestFindFirstArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindFirstOrThrowArgs} args - Arguments to find a Contest
     * @example
     * // Get one Contest
     * const contest = await prisma.contest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContestFindFirstOrThrowArgs>(args?: SelectSubset<T, ContestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contests
     * const contests = await prisma.contest.findMany()
     * 
     * // Get first 10 Contests
     * const contests = await prisma.contest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contestWithIdOnly = await prisma.contest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContestFindManyArgs>(args?: SelectSubset<T, ContestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contest.
     * @param {ContestCreateArgs} args - Arguments to create a Contest.
     * @example
     * // Create one Contest
     * const Contest = await prisma.contest.create({
     *   data: {
     *     // ... data to create a Contest
     *   }
     * })
     * 
     */
    create<T extends ContestCreateArgs>(args: SelectSubset<T, ContestCreateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contests.
     * @param {ContestCreateManyArgs} args - Arguments to create many Contests.
     * @example
     * // Create many Contests
     * const contest = await prisma.contest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContestCreateManyArgs>(args?: SelectSubset<T, ContestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contests and returns the data saved in the database.
     * @param {ContestCreateManyAndReturnArgs} args - Arguments to create many Contests.
     * @example
     * // Create many Contests
     * const contest = await prisma.contest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contests and only return the `id`
     * const contestWithIdOnly = await prisma.contest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContestCreateManyAndReturnArgs>(args?: SelectSubset<T, ContestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contest.
     * @param {ContestDeleteArgs} args - Arguments to delete one Contest.
     * @example
     * // Delete one Contest
     * const Contest = await prisma.contest.delete({
     *   where: {
     *     // ... filter to delete one Contest
     *   }
     * })
     * 
     */
    delete<T extends ContestDeleteArgs>(args: SelectSubset<T, ContestDeleteArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contest.
     * @param {ContestUpdateArgs} args - Arguments to update one Contest.
     * @example
     * // Update one Contest
     * const contest = await prisma.contest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContestUpdateArgs>(args: SelectSubset<T, ContestUpdateArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contests.
     * @param {ContestDeleteManyArgs} args - Arguments to filter Contests to delete.
     * @example
     * // Delete a few Contests
     * const { count } = await prisma.contest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContestDeleteManyArgs>(args?: SelectSubset<T, ContestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contests
     * const contest = await prisma.contest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContestUpdateManyArgs>(args: SelectSubset<T, ContestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contests and returns the data updated in the database.
     * @param {ContestUpdateManyAndReturnArgs} args - Arguments to update many Contests.
     * @example
     * // Update many Contests
     * const contest = await prisma.contest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contests and only return the `id`
     * const contestWithIdOnly = await prisma.contest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContestUpdateManyAndReturnArgs>(args: SelectSubset<T, ContestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contest.
     * @param {ContestUpsertArgs} args - Arguments to update or create a Contest.
     * @example
     * // Update or create a Contest
     * const contest = await prisma.contest.upsert({
     *   create: {
     *     // ... data to create a Contest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contest we want to update
     *   }
     * })
     */
    upsert<T extends ContestUpsertArgs>(args: SelectSubset<T, ContestUpsertArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestCountArgs} args - Arguments to filter Contests to count.
     * @example
     * // Count the number of Contests
     * const count = await prisma.contest.count({
     *   where: {
     *     // ... the filter for the Contests we want to count
     *   }
     * })
    **/
    count<T extends ContestCountArgs>(
      args?: Subset<T, ContestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContestAggregateArgs>(args: Subset<T, ContestAggregateArgs>): Prisma.PrismaPromise<GetContestAggregateType<T>>

    /**
     * Group by Contest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContestGroupByArgs['orderBy'] }
        : { orderBy?: ContestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contest model
   */
  readonly fields: ContestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participations<T extends Contest$participationsArgs<ExtArgs> = {}>(args?: Subset<T, Contest$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    winners<T extends Contest$winnersArgs<ExtArgs> = {}>(args?: Subset<T, Contest$winnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    txnHistory<T extends Contest$txnHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Contest$txnHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contest model
   */
  interface ContestFieldRefs {
    readonly id: FieldRef<"Contest", 'String'>
    readonly title: FieldRef<"Contest", 'String'>
    readonly entryAmount: FieldRef<"Contest", 'Float'>
    readonly creatorId: FieldRef<"Contest", 'String'>
    readonly startTime: FieldRef<"Contest", 'DateTime'>
    readonly endTime: FieldRef<"Contest", 'DateTime'>
    readonly status: FieldRef<"Contest", 'ContestStatus'>
    readonly totalPool: FieldRef<"Contest", 'Float'>
    readonly createdAt: FieldRef<"Contest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contest findUnique
   */
  export type ContestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findUniqueOrThrow
   */
  export type ContestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest findFirst
   */
  export type ContestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findFirstOrThrow
   */
  export type ContestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contest to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contests.
     */
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest findMany
   */
  export type ContestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter, which Contests to fetch.
     */
    where?: ContestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contests to fetch.
     */
    orderBy?: ContestOrderByWithRelationInput | ContestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contests.
     */
    cursor?: ContestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contests.
     */
    skip?: number
    distinct?: ContestScalarFieldEnum | ContestScalarFieldEnum[]
  }

  /**
   * Contest create
   */
  export type ContestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to create a Contest.
     */
    data: XOR<ContestCreateInput, ContestUncheckedCreateInput>
  }

  /**
   * Contest createMany
   */
  export type ContestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contests.
     */
    data: ContestCreateManyInput | ContestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contest createManyAndReturn
   */
  export type ContestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * The data used to create many Contests.
     */
    data: ContestCreateManyInput | ContestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contest update
   */
  export type ContestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The data needed to update a Contest.
     */
    data: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
    /**
     * Choose, which Contest to update.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest updateMany
   */
  export type ContestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contests.
     */
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyInput>
    /**
     * Filter which Contests to update
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to update.
     */
    limit?: number
  }

  /**
   * Contest updateManyAndReturn
   */
  export type ContestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * The data used to update Contests.
     */
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyInput>
    /**
     * Filter which Contests to update
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contest upsert
   */
  export type ContestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * The filter to search for the Contest to update in case it exists.
     */
    where: ContestWhereUniqueInput
    /**
     * In case the Contest found by the `where` argument doesn't exist, create a new Contest with this data.
     */
    create: XOR<ContestCreateInput, ContestUncheckedCreateInput>
    /**
     * In case the Contest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContestUpdateInput, ContestUncheckedUpdateInput>
  }

  /**
   * Contest delete
   */
  export type ContestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    /**
     * Filter which Contest to delete.
     */
    where: ContestWhereUniqueInput
  }

  /**
   * Contest deleteMany
   */
  export type ContestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contests to delete
     */
    where?: ContestWhereInput
    /**
     * Limit how many Contests to delete.
     */
    limit?: number
  }

  /**
   * Contest.participations
   */
  export type Contest$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    cursor?: ParticipationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Contest.winners
   */
  export type Contest$winnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    cursor?: WinnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Contest.txnHistory
   */
  export type Contest$txnHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    where?: TxnHistoryWhereInput
    orderBy?: TxnHistoryOrderByWithRelationInput | TxnHistoryOrderByWithRelationInput[]
    cursor?: TxnHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TxnHistoryScalarFieldEnum | TxnHistoryScalarFieldEnum[]
  }

  /**
   * Contest without action
   */
  export type ContestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
  }


  /**
   * Model Participation
   */

  export type AggregateParticipation = {
    _count: ParticipationCountAggregateOutputType | null
    _avg: ParticipationAvgAggregateOutputType | null
    _sum: ParticipationSumAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  export type ParticipationAvgAggregateOutputType = {
    amountPaid: number | null
  }

  export type ParticipationSumAggregateOutputType = {
    amountPaid: number | null
  }

  export type ParticipationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contestId: string | null
    amountPaid: number | null
    answer: $Enums.Answerenum | null
    createdAt: Date | null
  }

  export type ParticipationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contestId: string | null
    amountPaid: number | null
    answer: $Enums.Answerenum | null
    createdAt: Date | null
  }

  export type ParticipationCountAggregateOutputType = {
    id: number
    userId: number
    contestId: number
    amountPaid: number
    answer: number
    createdAt: number
    _all: number
  }


  export type ParticipationAvgAggregateInputType = {
    amountPaid?: true
  }

  export type ParticipationSumAggregateInputType = {
    amountPaid?: true
  }

  export type ParticipationMinAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    amountPaid?: true
    answer?: true
    createdAt?: true
  }

  export type ParticipationMaxAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    amountPaid?: true
    answer?: true
    createdAt?: true
  }

  export type ParticipationCountAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    amountPaid?: true
    answer?: true
    createdAt?: true
    _all?: true
  }

  export type ParticipationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participation to aggregate.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participations
    **/
    _count?: true | ParticipationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipationMaxAggregateInputType
  }

  export type GetParticipationAggregateType<T extends ParticipationAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipation[P]>
      : GetScalarType<T[P], AggregateParticipation[P]>
  }




  export type ParticipationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithAggregationInput | ParticipationOrderByWithAggregationInput[]
    by: ParticipationScalarFieldEnum[] | ParticipationScalarFieldEnum
    having?: ParticipationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipationCountAggregateInputType | true
    _avg?: ParticipationAvgAggregateInputType
    _sum?: ParticipationSumAggregateInputType
    _min?: ParticipationMinAggregateInputType
    _max?: ParticipationMaxAggregateInputType
  }

  export type ParticipationGroupByOutputType = {
    id: string
    userId: string
    contestId: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt: Date
    _count: ParticipationCountAggregateOutputType | null
    _avg: ParticipationAvgAggregateOutputType | null
    _sum: ParticipationSumAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  type GetParticipationGroupByPayload<T extends ParticipationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
        }
      >
    >


  export type ParticipationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    amountPaid?: boolean
    answer?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    amountPaid?: boolean
    answer?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    amountPaid?: boolean
    answer?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectScalar = {
    id?: boolean
    userId?: boolean
    contestId?: boolean
    amountPaid?: boolean
    answer?: boolean
    createdAt?: boolean
  }

  export type ParticipationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contestId" | "amountPaid" | "answer" | "createdAt", ExtArgs["result"]["participation"]>
  export type ParticipationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }
  export type ParticipationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }
  export type ParticipationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }

  export type $ParticipationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contest: Prisma.$ContestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contestId: string
      amountPaid: number
      answer: $Enums.Answerenum
      createdAt: Date
    }, ExtArgs["result"]["participation"]>
    composites: {}
  }

  type ParticipationGetPayload<S extends boolean | null | undefined | ParticipationDefaultArgs> = $Result.GetResult<Prisma.$ParticipationPayload, S>

  type ParticipationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipationCountAggregateInputType | true
    }

  export interface ParticipationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participation'], meta: { name: 'Participation' } }
    /**
     * Find zero or one Participation that matches the filter.
     * @param {ParticipationFindUniqueArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipationFindUniqueArgs>(args: SelectSubset<T, ParticipationFindUniqueArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipationFindUniqueOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipationFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindFirstArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipationFindFirstArgs>(args?: SelectSubset<T, ParticipationFindFirstArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindFirstOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipationFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participations
     * const participations = await prisma.participation.findMany()
     * 
     * // Get first 10 Participations
     * const participations = await prisma.participation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participationWithIdOnly = await prisma.participation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipationFindManyArgs>(args?: SelectSubset<T, ParticipationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participation.
     * @param {ParticipationCreateArgs} args - Arguments to create a Participation.
     * @example
     * // Create one Participation
     * const Participation = await prisma.participation.create({
     *   data: {
     *     // ... data to create a Participation
     *   }
     * })
     * 
     */
    create<T extends ParticipationCreateArgs>(args: SelectSubset<T, ParticipationCreateArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participations.
     * @param {ParticipationCreateManyArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipationCreateManyArgs>(args?: SelectSubset<T, ParticipationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participations and returns the data saved in the database.
     * @param {ParticipationCreateManyAndReturnArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participations and only return the `id`
     * const participationWithIdOnly = await prisma.participation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipationCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participation.
     * @param {ParticipationDeleteArgs} args - Arguments to delete one Participation.
     * @example
     * // Delete one Participation
     * const Participation = await prisma.participation.delete({
     *   where: {
     *     // ... filter to delete one Participation
     *   }
     * })
     * 
     */
    delete<T extends ParticipationDeleteArgs>(args: SelectSubset<T, ParticipationDeleteArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participation.
     * @param {ParticipationUpdateArgs} args - Arguments to update one Participation.
     * @example
     * // Update one Participation
     * const participation = await prisma.participation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipationUpdateArgs>(args: SelectSubset<T, ParticipationUpdateArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participations.
     * @param {ParticipationDeleteManyArgs} args - Arguments to filter Participations to delete.
     * @example
     * // Delete a few Participations
     * const { count } = await prisma.participation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipationDeleteManyArgs>(args?: SelectSubset<T, ParticipationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participations
     * const participation = await prisma.participation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipationUpdateManyArgs>(args: SelectSubset<T, ParticipationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations and returns the data updated in the database.
     * @param {ParticipationUpdateManyAndReturnArgs} args - Arguments to update many Participations.
     * @example
     * // Update many Participations
     * const participation = await prisma.participation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participations and only return the `id`
     * const participationWithIdOnly = await prisma.participation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipationUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participation.
     * @param {ParticipationUpsertArgs} args - Arguments to update or create a Participation.
     * @example
     * // Update or create a Participation
     * const participation = await prisma.participation.upsert({
     *   create: {
     *     // ... data to create a Participation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participation we want to update
     *   }
     * })
     */
    upsert<T extends ParticipationUpsertArgs>(args: SelectSubset<T, ParticipationUpsertArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationCountArgs} args - Arguments to filter Participations to count.
     * @example
     * // Count the number of Participations
     * const count = await prisma.participation.count({
     *   where: {
     *     // ... the filter for the Participations we want to count
     *   }
     * })
    **/
    count<T extends ParticipationCountArgs>(
      args?: Subset<T, ParticipationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipationAggregateArgs>(args: Subset<T, ParticipationAggregateArgs>): Prisma.PrismaPromise<GetParticipationAggregateType<T>>

    /**
     * Group by Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipationGroupByArgs['orderBy'] }
        : { orderBy?: ParticipationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participation model
   */
  readonly fields: ParticipationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contest<T extends ContestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestDefaultArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participation model
   */
  interface ParticipationFieldRefs {
    readonly id: FieldRef<"Participation", 'String'>
    readonly userId: FieldRef<"Participation", 'String'>
    readonly contestId: FieldRef<"Participation", 'String'>
    readonly amountPaid: FieldRef<"Participation", 'Float'>
    readonly answer: FieldRef<"Participation", 'Answerenum'>
    readonly createdAt: FieldRef<"Participation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participation findUnique
   */
  export type ParticipationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation findUniqueOrThrow
   */
  export type ParticipationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation findFirst
   */
  export type ParticipationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation findFirstOrThrow
   */
  export type ParticipationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation findMany
   */
  export type ParticipationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participations to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation create
   */
  export type ParticipationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * The data needed to create a Participation.
     */
    data: XOR<ParticipationCreateInput, ParticipationUncheckedCreateInput>
  }

  /**
   * Participation createMany
   */
  export type ParticipationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participations.
     */
    data: ParticipationCreateManyInput | ParticipationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participation createManyAndReturn
   */
  export type ParticipationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * The data used to create many Participations.
     */
    data: ParticipationCreateManyInput | ParticipationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participation update
   */
  export type ParticipationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * The data needed to update a Participation.
     */
    data: XOR<ParticipationUpdateInput, ParticipationUncheckedUpdateInput>
    /**
     * Choose, which Participation to update.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation updateMany
   */
  export type ParticipationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participations.
     */
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyInput>
    /**
     * Filter which Participations to update
     */
    where?: ParticipationWhereInput
    /**
     * Limit how many Participations to update.
     */
    limit?: number
  }

  /**
   * Participation updateManyAndReturn
   */
  export type ParticipationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * The data used to update Participations.
     */
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyInput>
    /**
     * Filter which Participations to update
     */
    where?: ParticipationWhereInput
    /**
     * Limit how many Participations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participation upsert
   */
  export type ParticipationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * The filter to search for the Participation to update in case it exists.
     */
    where: ParticipationWhereUniqueInput
    /**
     * In case the Participation found by the `where` argument doesn't exist, create a new Participation with this data.
     */
    create: XOR<ParticipationCreateInput, ParticipationUncheckedCreateInput>
    /**
     * In case the Participation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipationUpdateInput, ParticipationUncheckedUpdateInput>
  }

  /**
   * Participation delete
   */
  export type ParticipationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter which Participation to delete.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation deleteMany
   */
  export type ParticipationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participations to delete
     */
    where?: ParticipationWhereInput
    /**
     * Limit how many Participations to delete.
     */
    limit?: number
  }

  /**
   * Participation without action
   */
  export type ParticipationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
  }


  /**
   * Model Winner
   */

  export type AggregateWinner = {
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  export type WinnerAvgAggregateOutputType = {
    reward: number | null
  }

  export type WinnerSumAggregateOutputType = {
    reward: number | null
  }

  export type WinnerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contestId: string | null
    reward: number | null
    createdAt: Date | null
  }

  export type WinnerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contestId: string | null
    reward: number | null
    createdAt: Date | null
  }

  export type WinnerCountAggregateOutputType = {
    id: number
    userId: number
    contestId: number
    reward: number
    createdAt: number
    _all: number
  }


  export type WinnerAvgAggregateInputType = {
    reward?: true
  }

  export type WinnerSumAggregateInputType = {
    reward?: true
  }

  export type WinnerMinAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    reward?: true
    createdAt?: true
  }

  export type WinnerMaxAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    reward?: true
    createdAt?: true
  }

  export type WinnerCountAggregateInputType = {
    id?: true
    userId?: true
    contestId?: true
    reward?: true
    createdAt?: true
    _all?: true
  }

  export type WinnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winner to aggregate.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Winners
    **/
    _count?: true | WinnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WinnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WinnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WinnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WinnerMaxAggregateInputType
  }

  export type GetWinnerAggregateType<T extends WinnerAggregateArgs> = {
        [P in keyof T & keyof AggregateWinner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWinner[P]>
      : GetScalarType<T[P], AggregateWinner[P]>
  }




  export type WinnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WinnerWhereInput
    orderBy?: WinnerOrderByWithAggregationInput | WinnerOrderByWithAggregationInput[]
    by: WinnerScalarFieldEnum[] | WinnerScalarFieldEnum
    having?: WinnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WinnerCountAggregateInputType | true
    _avg?: WinnerAvgAggregateInputType
    _sum?: WinnerSumAggregateInputType
    _min?: WinnerMinAggregateInputType
    _max?: WinnerMaxAggregateInputType
  }

  export type WinnerGroupByOutputType = {
    id: string
    userId: string
    contestId: string
    reward: number
    createdAt: Date
    _count: WinnerCountAggregateOutputType | null
    _avg: WinnerAvgAggregateOutputType | null
    _sum: WinnerSumAggregateOutputType | null
    _min: WinnerMinAggregateOutputType | null
    _max: WinnerMaxAggregateOutputType | null
  }

  type GetWinnerGroupByPayload<T extends WinnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WinnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WinnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WinnerGroupByOutputType[P]>
            : GetScalarType<T[P], WinnerGroupByOutputType[P]>
        }
      >
    >


  export type WinnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    reward?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    reward?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contestId?: boolean
    reward?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["winner"]>

  export type WinnerSelectScalar = {
    id?: boolean
    userId?: boolean
    contestId?: boolean
    reward?: boolean
    createdAt?: boolean
  }

  export type WinnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contestId" | "reward" | "createdAt", ExtArgs["result"]["winner"]>
  export type WinnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }
  export type WinnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | ContestDefaultArgs<ExtArgs>
  }

  export type $WinnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Winner"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contest: Prisma.$ContestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contestId: string
      reward: number
      createdAt: Date
    }, ExtArgs["result"]["winner"]>
    composites: {}
  }

  type WinnerGetPayload<S extends boolean | null | undefined | WinnerDefaultArgs> = $Result.GetResult<Prisma.$WinnerPayload, S>

  type WinnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WinnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WinnerCountAggregateInputType | true
    }

  export interface WinnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Winner'], meta: { name: 'Winner' } }
    /**
     * Find zero or one Winner that matches the filter.
     * @param {WinnerFindUniqueArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WinnerFindUniqueArgs>(args: SelectSubset<T, WinnerFindUniqueArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Winner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WinnerFindUniqueOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WinnerFindUniqueOrThrowArgs>(args: SelectSubset<T, WinnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WinnerFindFirstArgs>(args?: SelectSubset<T, WinnerFindFirstArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Winner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindFirstOrThrowArgs} args - Arguments to find a Winner
     * @example
     * // Get one Winner
     * const winner = await prisma.winner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WinnerFindFirstOrThrowArgs>(args?: SelectSubset<T, WinnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Winners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Winners
     * const winners = await prisma.winner.findMany()
     * 
     * // Get first 10 Winners
     * const winners = await prisma.winner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const winnerWithIdOnly = await prisma.winner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WinnerFindManyArgs>(args?: SelectSubset<T, WinnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Winner.
     * @param {WinnerCreateArgs} args - Arguments to create a Winner.
     * @example
     * // Create one Winner
     * const Winner = await prisma.winner.create({
     *   data: {
     *     // ... data to create a Winner
     *   }
     * })
     * 
     */
    create<T extends WinnerCreateArgs>(args: SelectSubset<T, WinnerCreateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Winners.
     * @param {WinnerCreateManyArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WinnerCreateManyArgs>(args?: SelectSubset<T, WinnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Winners and returns the data saved in the database.
     * @param {WinnerCreateManyAndReturnArgs} args - Arguments to create many Winners.
     * @example
     * // Create many Winners
     * const winner = await prisma.winner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WinnerCreateManyAndReturnArgs>(args?: SelectSubset<T, WinnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Winner.
     * @param {WinnerDeleteArgs} args - Arguments to delete one Winner.
     * @example
     * // Delete one Winner
     * const Winner = await prisma.winner.delete({
     *   where: {
     *     // ... filter to delete one Winner
     *   }
     * })
     * 
     */
    delete<T extends WinnerDeleteArgs>(args: SelectSubset<T, WinnerDeleteArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Winner.
     * @param {WinnerUpdateArgs} args - Arguments to update one Winner.
     * @example
     * // Update one Winner
     * const winner = await prisma.winner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WinnerUpdateArgs>(args: SelectSubset<T, WinnerUpdateArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Winners.
     * @param {WinnerDeleteManyArgs} args - Arguments to filter Winners to delete.
     * @example
     * // Delete a few Winners
     * const { count } = await prisma.winner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WinnerDeleteManyArgs>(args?: SelectSubset<T, WinnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WinnerUpdateManyArgs>(args: SelectSubset<T, WinnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Winners and returns the data updated in the database.
     * @param {WinnerUpdateManyAndReturnArgs} args - Arguments to update many Winners.
     * @example
     * // Update many Winners
     * const winner = await prisma.winner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Winners and only return the `id`
     * const winnerWithIdOnly = await prisma.winner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WinnerUpdateManyAndReturnArgs>(args: SelectSubset<T, WinnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Winner.
     * @param {WinnerUpsertArgs} args - Arguments to update or create a Winner.
     * @example
     * // Update or create a Winner
     * const winner = await prisma.winner.upsert({
     *   create: {
     *     // ... data to create a Winner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Winner we want to update
     *   }
     * })
     */
    upsert<T extends WinnerUpsertArgs>(args: SelectSubset<T, WinnerUpsertArgs<ExtArgs>>): Prisma__WinnerClient<$Result.GetResult<Prisma.$WinnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Winners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerCountArgs} args - Arguments to filter Winners to count.
     * @example
     * // Count the number of Winners
     * const count = await prisma.winner.count({
     *   where: {
     *     // ... the filter for the Winners we want to count
     *   }
     * })
    **/
    count<T extends WinnerCountArgs>(
      args?: Subset<T, WinnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WinnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WinnerAggregateArgs>(args: Subset<T, WinnerAggregateArgs>): Prisma.PrismaPromise<GetWinnerAggregateType<T>>

    /**
     * Group by Winner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WinnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WinnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WinnerGroupByArgs['orderBy'] }
        : { orderBy?: WinnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WinnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWinnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Winner model
   */
  readonly fields: WinnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Winner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WinnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contest<T extends ContestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContestDefaultArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Winner model
   */
  interface WinnerFieldRefs {
    readonly id: FieldRef<"Winner", 'String'>
    readonly userId: FieldRef<"Winner", 'String'>
    readonly contestId: FieldRef<"Winner", 'String'>
    readonly reward: FieldRef<"Winner", 'Float'>
    readonly createdAt: FieldRef<"Winner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Winner findUnique
   */
  export type WinnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findUniqueOrThrow
   */
  export type WinnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner findFirst
   */
  export type WinnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findFirstOrThrow
   */
  export type WinnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winner to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Winners.
     */
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner findMany
   */
  export type WinnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter, which Winners to fetch.
     */
    where?: WinnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Winners to fetch.
     */
    orderBy?: WinnerOrderByWithRelationInput | WinnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Winners.
     */
    cursor?: WinnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Winners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Winners.
     */
    skip?: number
    distinct?: WinnerScalarFieldEnum | WinnerScalarFieldEnum[]
  }

  /**
   * Winner create
   */
  export type WinnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Winner.
     */
    data: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
  }

  /**
   * Winner createMany
   */
  export type WinnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Winner createManyAndReturn
   */
  export type WinnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to create many Winners.
     */
    data: WinnerCreateManyInput | WinnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner update
   */
  export type WinnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Winner.
     */
    data: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
    /**
     * Choose, which Winner to update.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner updateMany
   */
  export type WinnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
  }

  /**
   * Winner updateManyAndReturn
   */
  export type WinnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * The data used to update Winners.
     */
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyInput>
    /**
     * Filter which Winners to update
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Winner upsert
   */
  export type WinnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Winner to update in case it exists.
     */
    where: WinnerWhereUniqueInput
    /**
     * In case the Winner found by the `where` argument doesn't exist, create a new Winner with this data.
     */
    create: XOR<WinnerCreateInput, WinnerUncheckedCreateInput>
    /**
     * In case the Winner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WinnerUpdateInput, WinnerUncheckedUpdateInput>
  }

  /**
   * Winner delete
   */
  export type WinnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
    /**
     * Filter which Winner to delete.
     */
    where: WinnerWhereUniqueInput
  }

  /**
   * Winner deleteMany
   */
  export type WinnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Winners to delete
     */
    where?: WinnerWhereInput
    /**
     * Limit how many Winners to delete.
     */
    limit?: number
  }

  /**
   * Winner without action
   */
  export type WinnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Winner
     */
    select?: WinnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Winner
     */
    omit?: WinnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WinnerInclude<ExtArgs> | null
  }


  /**
   * Model TxnHistory
   */

  export type AggregateTxnHistory = {
    _count: TxnHistoryCountAggregateOutputType | null
    _avg: TxnHistoryAvgAggregateOutputType | null
    _sum: TxnHistorySumAggregateOutputType | null
    _min: TxnHistoryMinAggregateOutputType | null
    _max: TxnHistoryMaxAggregateOutputType | null
  }

  export type TxnHistoryAvgAggregateOutputType = {
    amount: number | null
  }

  export type TxnHistorySumAggregateOutputType = {
    amount: number | null
  }

  export type TxnHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.TxnType | null
    amount: number | null
    contestId: string | null
    transactionHash: string | null
    status: $Enums.TxnStatus | null
    createdAt: Date | null
  }

  export type TxnHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.TxnType | null
    amount: number | null
    contestId: string | null
    transactionHash: string | null
    status: $Enums.TxnStatus | null
    createdAt: Date | null
  }

  export type TxnHistoryCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    amount: number
    contestId: number
    transactionHash: number
    status: number
    createdAt: number
    _all: number
  }


  export type TxnHistoryAvgAggregateInputType = {
    amount?: true
  }

  export type TxnHistorySumAggregateInputType = {
    amount?: true
  }

  export type TxnHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    contestId?: true
    transactionHash?: true
    status?: true
    createdAt?: true
  }

  export type TxnHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    contestId?: true
    transactionHash?: true
    status?: true
    createdAt?: true
  }

  export type TxnHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amount?: true
    contestId?: true
    transactionHash?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TxnHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TxnHistory to aggregate.
     */
    where?: TxnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxnHistories to fetch.
     */
    orderBy?: TxnHistoryOrderByWithRelationInput | TxnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TxnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxnHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TxnHistories
    **/
    _count?: true | TxnHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TxnHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TxnHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TxnHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TxnHistoryMaxAggregateInputType
  }

  export type GetTxnHistoryAggregateType<T extends TxnHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTxnHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTxnHistory[P]>
      : GetScalarType<T[P], AggregateTxnHistory[P]>
  }




  export type TxnHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TxnHistoryWhereInput
    orderBy?: TxnHistoryOrderByWithAggregationInput | TxnHistoryOrderByWithAggregationInput[]
    by: TxnHistoryScalarFieldEnum[] | TxnHistoryScalarFieldEnum
    having?: TxnHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TxnHistoryCountAggregateInputType | true
    _avg?: TxnHistoryAvgAggregateInputType
    _sum?: TxnHistorySumAggregateInputType
    _min?: TxnHistoryMinAggregateInputType
    _max?: TxnHistoryMaxAggregateInputType
  }

  export type TxnHistoryGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.TxnType
    amount: number
    contestId: string | null
    transactionHash: string | null
    status: $Enums.TxnStatus
    createdAt: Date
    _count: TxnHistoryCountAggregateOutputType | null
    _avg: TxnHistoryAvgAggregateOutputType | null
    _sum: TxnHistorySumAggregateOutputType | null
    _min: TxnHistoryMinAggregateOutputType | null
    _max: TxnHistoryMaxAggregateOutputType | null
  }

  type GetTxnHistoryGroupByPayload<T extends TxnHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TxnHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TxnHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TxnHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TxnHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TxnHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    contestId?: boolean
    transactionHash?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | TxnHistory$contestArgs<ExtArgs>
  }, ExtArgs["result"]["txnHistory"]>

  export type TxnHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    contestId?: boolean
    transactionHash?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | TxnHistory$contestArgs<ExtArgs>
  }, ExtArgs["result"]["txnHistory"]>

  export type TxnHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    contestId?: boolean
    transactionHash?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | TxnHistory$contestArgs<ExtArgs>
  }, ExtArgs["result"]["txnHistory"]>

  export type TxnHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    contestId?: boolean
    transactionHash?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TxnHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "amount" | "contestId" | "transactionHash" | "status" | "createdAt", ExtArgs["result"]["txnHistory"]>
  export type TxnHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | TxnHistory$contestArgs<ExtArgs>
  }
  export type TxnHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | TxnHistory$contestArgs<ExtArgs>
  }
  export type TxnHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contest?: boolean | TxnHistory$contestArgs<ExtArgs>
  }

  export type $TxnHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TxnHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contest: Prisma.$ContestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.TxnType
      amount: number
      contestId: string | null
      transactionHash: string | null
      status: $Enums.TxnStatus
      createdAt: Date
    }, ExtArgs["result"]["txnHistory"]>
    composites: {}
  }

  type TxnHistoryGetPayload<S extends boolean | null | undefined | TxnHistoryDefaultArgs> = $Result.GetResult<Prisma.$TxnHistoryPayload, S>

  type TxnHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TxnHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TxnHistoryCountAggregateInputType | true
    }

  export interface TxnHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TxnHistory'], meta: { name: 'TxnHistory' } }
    /**
     * Find zero or one TxnHistory that matches the filter.
     * @param {TxnHistoryFindUniqueArgs} args - Arguments to find a TxnHistory
     * @example
     * // Get one TxnHistory
     * const txnHistory = await prisma.txnHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TxnHistoryFindUniqueArgs>(args: SelectSubset<T, TxnHistoryFindUniqueArgs<ExtArgs>>): Prisma__TxnHistoryClient<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TxnHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TxnHistoryFindUniqueOrThrowArgs} args - Arguments to find a TxnHistory
     * @example
     * // Get one TxnHistory
     * const txnHistory = await prisma.txnHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TxnHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TxnHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TxnHistoryClient<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TxnHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxnHistoryFindFirstArgs} args - Arguments to find a TxnHistory
     * @example
     * // Get one TxnHistory
     * const txnHistory = await prisma.txnHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TxnHistoryFindFirstArgs>(args?: SelectSubset<T, TxnHistoryFindFirstArgs<ExtArgs>>): Prisma__TxnHistoryClient<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TxnHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxnHistoryFindFirstOrThrowArgs} args - Arguments to find a TxnHistory
     * @example
     * // Get one TxnHistory
     * const txnHistory = await prisma.txnHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TxnHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TxnHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TxnHistoryClient<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TxnHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxnHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TxnHistories
     * const txnHistories = await prisma.txnHistory.findMany()
     * 
     * // Get first 10 TxnHistories
     * const txnHistories = await prisma.txnHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const txnHistoryWithIdOnly = await prisma.txnHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TxnHistoryFindManyArgs>(args?: SelectSubset<T, TxnHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TxnHistory.
     * @param {TxnHistoryCreateArgs} args - Arguments to create a TxnHistory.
     * @example
     * // Create one TxnHistory
     * const TxnHistory = await prisma.txnHistory.create({
     *   data: {
     *     // ... data to create a TxnHistory
     *   }
     * })
     * 
     */
    create<T extends TxnHistoryCreateArgs>(args: SelectSubset<T, TxnHistoryCreateArgs<ExtArgs>>): Prisma__TxnHistoryClient<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TxnHistories.
     * @param {TxnHistoryCreateManyArgs} args - Arguments to create many TxnHistories.
     * @example
     * // Create many TxnHistories
     * const txnHistory = await prisma.txnHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TxnHistoryCreateManyArgs>(args?: SelectSubset<T, TxnHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TxnHistories and returns the data saved in the database.
     * @param {TxnHistoryCreateManyAndReturnArgs} args - Arguments to create many TxnHistories.
     * @example
     * // Create many TxnHistories
     * const txnHistory = await prisma.txnHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TxnHistories and only return the `id`
     * const txnHistoryWithIdOnly = await prisma.txnHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TxnHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TxnHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TxnHistory.
     * @param {TxnHistoryDeleteArgs} args - Arguments to delete one TxnHistory.
     * @example
     * // Delete one TxnHistory
     * const TxnHistory = await prisma.txnHistory.delete({
     *   where: {
     *     // ... filter to delete one TxnHistory
     *   }
     * })
     * 
     */
    delete<T extends TxnHistoryDeleteArgs>(args: SelectSubset<T, TxnHistoryDeleteArgs<ExtArgs>>): Prisma__TxnHistoryClient<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TxnHistory.
     * @param {TxnHistoryUpdateArgs} args - Arguments to update one TxnHistory.
     * @example
     * // Update one TxnHistory
     * const txnHistory = await prisma.txnHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TxnHistoryUpdateArgs>(args: SelectSubset<T, TxnHistoryUpdateArgs<ExtArgs>>): Prisma__TxnHistoryClient<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TxnHistories.
     * @param {TxnHistoryDeleteManyArgs} args - Arguments to filter TxnHistories to delete.
     * @example
     * // Delete a few TxnHistories
     * const { count } = await prisma.txnHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TxnHistoryDeleteManyArgs>(args?: SelectSubset<T, TxnHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TxnHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxnHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TxnHistories
     * const txnHistory = await prisma.txnHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TxnHistoryUpdateManyArgs>(args: SelectSubset<T, TxnHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TxnHistories and returns the data updated in the database.
     * @param {TxnHistoryUpdateManyAndReturnArgs} args - Arguments to update many TxnHistories.
     * @example
     * // Update many TxnHistories
     * const txnHistory = await prisma.txnHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TxnHistories and only return the `id`
     * const txnHistoryWithIdOnly = await prisma.txnHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TxnHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TxnHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TxnHistory.
     * @param {TxnHistoryUpsertArgs} args - Arguments to update or create a TxnHistory.
     * @example
     * // Update or create a TxnHistory
     * const txnHistory = await prisma.txnHistory.upsert({
     *   create: {
     *     // ... data to create a TxnHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TxnHistory we want to update
     *   }
     * })
     */
    upsert<T extends TxnHistoryUpsertArgs>(args: SelectSubset<T, TxnHistoryUpsertArgs<ExtArgs>>): Prisma__TxnHistoryClient<$Result.GetResult<Prisma.$TxnHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TxnHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxnHistoryCountArgs} args - Arguments to filter TxnHistories to count.
     * @example
     * // Count the number of TxnHistories
     * const count = await prisma.txnHistory.count({
     *   where: {
     *     // ... the filter for the TxnHistories we want to count
     *   }
     * })
    **/
    count<T extends TxnHistoryCountArgs>(
      args?: Subset<T, TxnHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TxnHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TxnHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxnHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TxnHistoryAggregateArgs>(args: Subset<T, TxnHistoryAggregateArgs>): Prisma.PrismaPromise<GetTxnHistoryAggregateType<T>>

    /**
     * Group by TxnHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TxnHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TxnHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TxnHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TxnHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TxnHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTxnHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TxnHistory model
   */
  readonly fields: TxnHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TxnHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TxnHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contest<T extends TxnHistory$contestArgs<ExtArgs> = {}>(args?: Subset<T, TxnHistory$contestArgs<ExtArgs>>): Prisma__ContestClient<$Result.GetResult<Prisma.$ContestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TxnHistory model
   */
  interface TxnHistoryFieldRefs {
    readonly id: FieldRef<"TxnHistory", 'String'>
    readonly userId: FieldRef<"TxnHistory", 'String'>
    readonly type: FieldRef<"TxnHistory", 'TxnType'>
    readonly amount: FieldRef<"TxnHistory", 'Float'>
    readonly contestId: FieldRef<"TxnHistory", 'String'>
    readonly transactionHash: FieldRef<"TxnHistory", 'String'>
    readonly status: FieldRef<"TxnHistory", 'TxnStatus'>
    readonly createdAt: FieldRef<"TxnHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TxnHistory findUnique
   */
  export type TxnHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TxnHistory to fetch.
     */
    where: TxnHistoryWhereUniqueInput
  }

  /**
   * TxnHistory findUniqueOrThrow
   */
  export type TxnHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TxnHistory to fetch.
     */
    where: TxnHistoryWhereUniqueInput
  }

  /**
   * TxnHistory findFirst
   */
  export type TxnHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TxnHistory to fetch.
     */
    where?: TxnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxnHistories to fetch.
     */
    orderBy?: TxnHistoryOrderByWithRelationInput | TxnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TxnHistories.
     */
    cursor?: TxnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxnHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TxnHistories.
     */
    distinct?: TxnHistoryScalarFieldEnum | TxnHistoryScalarFieldEnum[]
  }

  /**
   * TxnHistory findFirstOrThrow
   */
  export type TxnHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TxnHistory to fetch.
     */
    where?: TxnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxnHistories to fetch.
     */
    orderBy?: TxnHistoryOrderByWithRelationInput | TxnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TxnHistories.
     */
    cursor?: TxnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxnHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TxnHistories.
     */
    distinct?: TxnHistoryScalarFieldEnum | TxnHistoryScalarFieldEnum[]
  }

  /**
   * TxnHistory findMany
   */
  export type TxnHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TxnHistories to fetch.
     */
    where?: TxnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TxnHistories to fetch.
     */
    orderBy?: TxnHistoryOrderByWithRelationInput | TxnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TxnHistories.
     */
    cursor?: TxnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TxnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TxnHistories.
     */
    skip?: number
    distinct?: TxnHistoryScalarFieldEnum | TxnHistoryScalarFieldEnum[]
  }

  /**
   * TxnHistory create
   */
  export type TxnHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TxnHistory.
     */
    data: XOR<TxnHistoryCreateInput, TxnHistoryUncheckedCreateInput>
  }

  /**
   * TxnHistory createMany
   */
  export type TxnHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TxnHistories.
     */
    data: TxnHistoryCreateManyInput | TxnHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TxnHistory createManyAndReturn
   */
  export type TxnHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TxnHistories.
     */
    data: TxnHistoryCreateManyInput | TxnHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TxnHistory update
   */
  export type TxnHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TxnHistory.
     */
    data: XOR<TxnHistoryUpdateInput, TxnHistoryUncheckedUpdateInput>
    /**
     * Choose, which TxnHistory to update.
     */
    where: TxnHistoryWhereUniqueInput
  }

  /**
   * TxnHistory updateMany
   */
  export type TxnHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TxnHistories.
     */
    data: XOR<TxnHistoryUpdateManyMutationInput, TxnHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TxnHistories to update
     */
    where?: TxnHistoryWhereInput
    /**
     * Limit how many TxnHistories to update.
     */
    limit?: number
  }

  /**
   * TxnHistory updateManyAndReturn
   */
  export type TxnHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TxnHistories.
     */
    data: XOR<TxnHistoryUpdateManyMutationInput, TxnHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TxnHistories to update
     */
    where?: TxnHistoryWhereInput
    /**
     * Limit how many TxnHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TxnHistory upsert
   */
  export type TxnHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TxnHistory to update in case it exists.
     */
    where: TxnHistoryWhereUniqueInput
    /**
     * In case the TxnHistory found by the `where` argument doesn't exist, create a new TxnHistory with this data.
     */
    create: XOR<TxnHistoryCreateInput, TxnHistoryUncheckedCreateInput>
    /**
     * In case the TxnHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TxnHistoryUpdateInput, TxnHistoryUncheckedUpdateInput>
  }

  /**
   * TxnHistory delete
   */
  export type TxnHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
    /**
     * Filter which TxnHistory to delete.
     */
    where: TxnHistoryWhereUniqueInput
  }

  /**
   * TxnHistory deleteMany
   */
  export type TxnHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TxnHistories to delete
     */
    where?: TxnHistoryWhereInput
    /**
     * Limit how many TxnHistories to delete.
     */
    limit?: number
  }

  /**
   * TxnHistory.contest
   */
  export type TxnHistory$contestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contest
     */
    select?: ContestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contest
     */
    omit?: ContestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContestInclude<ExtArgs> | null
    where?: ContestWhereInput
  }

  /**
   * TxnHistory without action
   */
  export type TxnHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TxnHistory
     */
    select?: TxnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TxnHistory
     */
    omit?: TxnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TxnHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    walletAddress: 'walletAddress',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    entryAmount: 'entryAmount',
    creatorId: 'creatorId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    totalPool: 'totalPool',
    createdAt: 'createdAt'
  };

  export type ContestScalarFieldEnum = (typeof ContestScalarFieldEnum)[keyof typeof ContestScalarFieldEnum]


  export const ParticipationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contestId: 'contestId',
    amountPaid: 'amountPaid',
    answer: 'answer',
    createdAt: 'createdAt'
  };

  export type ParticipationScalarFieldEnum = (typeof ParticipationScalarFieldEnum)[keyof typeof ParticipationScalarFieldEnum]


  export const WinnerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contestId: 'contestId',
    reward: 'reward',
    createdAt: 'createdAt'
  };

  export type WinnerScalarFieldEnum = (typeof WinnerScalarFieldEnum)[keyof typeof WinnerScalarFieldEnum]


  export const TxnHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    amount: 'amount',
    contestId: 'contestId',
    transactionHash: 'transactionHash',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TxnHistoryScalarFieldEnum = (typeof TxnHistoryScalarFieldEnum)[keyof typeof TxnHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ContestStatus'
   */
  export type EnumContestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContestStatus'>
    


  /**
   * Reference to a field of type 'ContestStatus[]'
   */
  export type ListEnumContestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContestStatus[]'>
    


  /**
   * Reference to a field of type 'Answerenum'
   */
  export type EnumAnswerenumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Answerenum'>
    


  /**
   * Reference to a field of type 'Answerenum[]'
   */
  export type ListEnumAnswerenumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Answerenum[]'>
    


  /**
   * Reference to a field of type 'TxnType'
   */
  export type EnumTxnTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxnType'>
    


  /**
   * Reference to a field of type 'TxnType[]'
   */
  export type ListEnumTxnTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxnType[]'>
    


  /**
   * Reference to a field of type 'TxnStatus'
   */
  export type EnumTxnStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxnStatus'>
    


  /**
   * Reference to a field of type 'TxnStatus[]'
   */
  export type ListEnumTxnStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxnStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    walletAddress?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    contestsCreated?: ContestListRelationFilter
    participations?: ParticipationListRelationFilter
    txns?: TxnHistoryListRelationFilter
    winners?: WinnerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    walletAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    contestsCreated?: ContestOrderByRelationAggregateInput
    participations?: ParticipationOrderByRelationAggregateInput
    txns?: TxnHistoryOrderByRelationAggregateInput
    winners?: WinnerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    walletAddress?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    contestsCreated?: ContestListRelationFilter
    participations?: ParticipationListRelationFilter
    txns?: TxnHistoryListRelationFilter
    winners?: WinnerListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    walletAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    walletAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ContestWhereInput = {
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    id?: StringFilter<"Contest"> | string
    title?: StringFilter<"Contest"> | string
    entryAmount?: FloatFilter<"Contest"> | number
    creatorId?: StringFilter<"Contest"> | string
    startTime?: DateTimeFilter<"Contest"> | Date | string
    endTime?: DateTimeFilter<"Contest"> | Date | string
    status?: EnumContestStatusFilter<"Contest"> | $Enums.ContestStatus
    totalPool?: FloatFilter<"Contest"> | number
    createdAt?: DateTimeFilter<"Contest"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    participations?: ParticipationListRelationFilter
    winners?: WinnerListRelationFilter
    txnHistory?: TxnHistoryListRelationFilter
  }

  export type ContestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    entryAmount?: SortOrder
    creatorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    totalPool?: SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    participations?: ParticipationOrderByRelationAggregateInput
    winners?: WinnerOrderByRelationAggregateInput
    txnHistory?: TxnHistoryOrderByRelationAggregateInput
  }

  export type ContestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContestWhereInput | ContestWhereInput[]
    OR?: ContestWhereInput[]
    NOT?: ContestWhereInput | ContestWhereInput[]
    title?: StringFilter<"Contest"> | string
    entryAmount?: FloatFilter<"Contest"> | number
    creatorId?: StringFilter<"Contest"> | string
    startTime?: DateTimeFilter<"Contest"> | Date | string
    endTime?: DateTimeFilter<"Contest"> | Date | string
    status?: EnumContestStatusFilter<"Contest"> | $Enums.ContestStatus
    totalPool?: FloatFilter<"Contest"> | number
    createdAt?: DateTimeFilter<"Contest"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    participations?: ParticipationListRelationFilter
    winners?: WinnerListRelationFilter
    txnHistory?: TxnHistoryListRelationFilter
  }, "id">

  export type ContestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    entryAmount?: SortOrder
    creatorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    totalPool?: SortOrder
    createdAt?: SortOrder
    _count?: ContestCountOrderByAggregateInput
    _avg?: ContestAvgOrderByAggregateInput
    _max?: ContestMaxOrderByAggregateInput
    _min?: ContestMinOrderByAggregateInput
    _sum?: ContestSumOrderByAggregateInput
  }

  export type ContestScalarWhereWithAggregatesInput = {
    AND?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    OR?: ContestScalarWhereWithAggregatesInput[]
    NOT?: ContestScalarWhereWithAggregatesInput | ContestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contest"> | string
    title?: StringWithAggregatesFilter<"Contest"> | string
    entryAmount?: FloatWithAggregatesFilter<"Contest"> | number
    creatorId?: StringWithAggregatesFilter<"Contest"> | string
    startTime?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
    status?: EnumContestStatusWithAggregatesFilter<"Contest"> | $Enums.ContestStatus
    totalPool?: FloatWithAggregatesFilter<"Contest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Contest"> | Date | string
  }

  export type ParticipationWhereInput = {
    AND?: ParticipationWhereInput | ParticipationWhereInput[]
    OR?: ParticipationWhereInput[]
    NOT?: ParticipationWhereInput | ParticipationWhereInput[]
    id?: StringFilter<"Participation"> | string
    userId?: StringFilter<"Participation"> | string
    contestId?: StringFilter<"Participation"> | string
    amountPaid?: FloatFilter<"Participation"> | number
    answer?: EnumAnswerenumFilter<"Participation"> | $Enums.Answerenum
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
  }

  export type ParticipationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    amountPaid?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contest?: ContestOrderByWithRelationInput
  }

  export type ParticipationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticipationWhereInput | ParticipationWhereInput[]
    OR?: ParticipationWhereInput[]
    NOT?: ParticipationWhereInput | ParticipationWhereInput[]
    userId?: StringFilter<"Participation"> | string
    contestId?: StringFilter<"Participation"> | string
    amountPaid?: FloatFilter<"Participation"> | number
    answer?: EnumAnswerenumFilter<"Participation"> | $Enums.Answerenum
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
  }, "id">

  export type ParticipationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    amountPaid?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    _count?: ParticipationCountOrderByAggregateInput
    _avg?: ParticipationAvgOrderByAggregateInput
    _max?: ParticipationMaxOrderByAggregateInput
    _min?: ParticipationMinOrderByAggregateInput
    _sum?: ParticipationSumOrderByAggregateInput
  }

  export type ParticipationScalarWhereWithAggregatesInput = {
    AND?: ParticipationScalarWhereWithAggregatesInput | ParticipationScalarWhereWithAggregatesInput[]
    OR?: ParticipationScalarWhereWithAggregatesInput[]
    NOT?: ParticipationScalarWhereWithAggregatesInput | ParticipationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participation"> | string
    userId?: StringWithAggregatesFilter<"Participation"> | string
    contestId?: StringWithAggregatesFilter<"Participation"> | string
    amountPaid?: FloatWithAggregatesFilter<"Participation"> | number
    answer?: EnumAnswerenumWithAggregatesFilter<"Participation"> | $Enums.Answerenum
    createdAt?: DateTimeWithAggregatesFilter<"Participation"> | Date | string
  }

  export type WinnerWhereInput = {
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    id?: StringFilter<"Winner"> | string
    userId?: StringFilter<"Winner"> | string
    contestId?: StringFilter<"Winner"> | string
    reward?: FloatFilter<"Winner"> | number
    createdAt?: DateTimeFilter<"Winner"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
  }

  export type WinnerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    reward?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contest?: ContestOrderByWithRelationInput
  }

  export type WinnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WinnerWhereInput | WinnerWhereInput[]
    OR?: WinnerWhereInput[]
    NOT?: WinnerWhereInput | WinnerWhereInput[]
    userId?: StringFilter<"Winner"> | string
    contestId?: StringFilter<"Winner"> | string
    reward?: FloatFilter<"Winner"> | number
    createdAt?: DateTimeFilter<"Winner"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestScalarRelationFilter, ContestWhereInput>
  }, "id">

  export type WinnerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    reward?: SortOrder
    createdAt?: SortOrder
    _count?: WinnerCountOrderByAggregateInput
    _avg?: WinnerAvgOrderByAggregateInput
    _max?: WinnerMaxOrderByAggregateInput
    _min?: WinnerMinOrderByAggregateInput
    _sum?: WinnerSumOrderByAggregateInput
  }

  export type WinnerScalarWhereWithAggregatesInput = {
    AND?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    OR?: WinnerScalarWhereWithAggregatesInput[]
    NOT?: WinnerScalarWhereWithAggregatesInput | WinnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Winner"> | string
    userId?: StringWithAggregatesFilter<"Winner"> | string
    contestId?: StringWithAggregatesFilter<"Winner"> | string
    reward?: FloatWithAggregatesFilter<"Winner"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Winner"> | Date | string
  }

  export type TxnHistoryWhereInput = {
    AND?: TxnHistoryWhereInput | TxnHistoryWhereInput[]
    OR?: TxnHistoryWhereInput[]
    NOT?: TxnHistoryWhereInput | TxnHistoryWhereInput[]
    id?: StringFilter<"TxnHistory"> | string
    userId?: StringFilter<"TxnHistory"> | string
    type?: EnumTxnTypeFilter<"TxnHistory"> | $Enums.TxnType
    amount?: FloatFilter<"TxnHistory"> | number
    contestId?: StringNullableFilter<"TxnHistory"> | string | null
    transactionHash?: StringNullableFilter<"TxnHistory"> | string | null
    status?: EnumTxnStatusFilter<"TxnHistory"> | $Enums.TxnStatus
    createdAt?: DateTimeFilter<"TxnHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestNullableScalarRelationFilter, ContestWhereInput> | null
  }

  export type TxnHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    contestId?: SortOrderInput | SortOrder
    transactionHash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contest?: ContestOrderByWithRelationInput
  }

  export type TxnHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TxnHistoryWhereInput | TxnHistoryWhereInput[]
    OR?: TxnHistoryWhereInput[]
    NOT?: TxnHistoryWhereInput | TxnHistoryWhereInput[]
    userId?: StringFilter<"TxnHistory"> | string
    type?: EnumTxnTypeFilter<"TxnHistory"> | $Enums.TxnType
    amount?: FloatFilter<"TxnHistory"> | number
    contestId?: StringNullableFilter<"TxnHistory"> | string | null
    transactionHash?: StringNullableFilter<"TxnHistory"> | string | null
    status?: EnumTxnStatusFilter<"TxnHistory"> | $Enums.TxnStatus
    createdAt?: DateTimeFilter<"TxnHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contest?: XOR<ContestNullableScalarRelationFilter, ContestWhereInput> | null
  }, "id">

  export type TxnHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    contestId?: SortOrderInput | SortOrder
    transactionHash?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TxnHistoryCountOrderByAggregateInput
    _avg?: TxnHistoryAvgOrderByAggregateInput
    _max?: TxnHistoryMaxOrderByAggregateInput
    _min?: TxnHistoryMinOrderByAggregateInput
    _sum?: TxnHistorySumOrderByAggregateInput
  }

  export type TxnHistoryScalarWhereWithAggregatesInput = {
    AND?: TxnHistoryScalarWhereWithAggregatesInput | TxnHistoryScalarWhereWithAggregatesInput[]
    OR?: TxnHistoryScalarWhereWithAggregatesInput[]
    NOT?: TxnHistoryScalarWhereWithAggregatesInput | TxnHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TxnHistory"> | string
    userId?: StringWithAggregatesFilter<"TxnHistory"> | string
    type?: EnumTxnTypeWithAggregatesFilter<"TxnHistory"> | $Enums.TxnType
    amount?: FloatWithAggregatesFilter<"TxnHistory"> | number
    contestId?: StringNullableWithAggregatesFilter<"TxnHistory"> | string | null
    transactionHash?: StringNullableWithAggregatesFilter<"TxnHistory"> | string | null
    status?: EnumTxnStatusWithAggregatesFilter<"TxnHistory"> | $Enums.TxnStatus
    createdAt?: DateTimeWithAggregatesFilter<"TxnHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    txns?: TxnHistoryCreateNestedManyWithoutUserInput
    winners?: WinnerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    txns?: TxnHistoryUncheckedCreateNestedManyWithoutUserInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    txns?: TxnHistoryUpdateManyWithoutUserNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    txns?: TxnHistoryUncheckedUpdateManyWithoutUserNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestCreateInput = {
    id?: string
    title: string
    entryAmount: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutContestsCreatedInput
    participations?: ParticipationCreateNestedManyWithoutContestInput
    winners?: WinnerCreateNestedManyWithoutContestInput
    txnHistory?: TxnHistoryCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateInput = {
    id?: string
    title: string
    entryAmount: number
    creatorId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    participations?: ParticipationUncheckedCreateNestedManyWithoutContestInput
    winners?: WinnerUncheckedCreateNestedManyWithoutContestInput
    txnHistory?: TxnHistoryUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContestsCreatedNestedInput
    participations?: ParticipationUpdateManyWithoutContestNestedInput
    winners?: WinnerUpdateManyWithoutContestNestedInput
    txnHistory?: TxnHistoryUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: ParticipationUncheckedUpdateManyWithoutContestNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutContestNestedInput
    txnHistory?: TxnHistoryUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestCreateManyInput = {
    id?: string
    title: string
    entryAmount: number
    creatorId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
  }

  export type ContestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationCreateInput = {
    id?: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutParticipationsInput
    contest: ContestCreateNestedOneWithoutParticipationsInput
  }

  export type ParticipationUncheckedCreateInput = {
    id?: string
    userId: string
    contestId: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt?: Date | string
  }

  export type ParticipationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
    contest?: ContestUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type ParticipationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationCreateManyInput = {
    id?: string
    userId: string
    contestId: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt?: Date | string
  }

  export type ParticipationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateInput = {
    id?: string
    reward: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWinnersInput
    contest: ContestCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateInput = {
    id?: string
    userId: string
    contestId: string
    reward: number
    createdAt?: Date | string
  }

  export type WinnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWinnersNestedInput
    contest?: ContestUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerCreateManyInput = {
    id?: string
    userId: string
    contestId: string
    reward: number
    createdAt?: Date | string
  }

  export type WinnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TxnHistoryCreateInput = {
    id?: string
    type: $Enums.TxnType
    amount: number
    transactionHash?: string | null
    status?: $Enums.TxnStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTxnsInput
    contest?: ContestCreateNestedOneWithoutTxnHistoryInput
  }

  export type TxnHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.TxnType
    amount: number
    contestId?: string | null
    transactionHash?: string | null
    status?: $Enums.TxnStatus
    createdAt?: Date | string
  }

  export type TxnHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTxnsNestedInput
    contest?: ContestUpdateOneWithoutTxnHistoryNestedInput
  }

  export type TxnHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TxnHistoryCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.TxnType
    amount: number
    contestId?: string | null
    transactionHash?: string | null
    status?: $Enums.TxnStatus
    createdAt?: Date | string
  }

  export type TxnHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TxnHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ContestListRelationFilter = {
    every?: ContestWhereInput
    some?: ContestWhereInput
    none?: ContestWhereInput
  }

  export type ParticipationListRelationFilter = {
    every?: ParticipationWhereInput
    some?: ParticipationWhereInput
    none?: ParticipationWhereInput
  }

  export type TxnHistoryListRelationFilter = {
    every?: TxnHistoryWhereInput
    some?: TxnHistoryWhereInput
    none?: TxnHistoryWhereInput
  }

  export type WinnerListRelationFilter = {
    every?: WinnerWhereInput
    some?: WinnerWhereInput
    none?: WinnerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParticipationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TxnHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WinnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    walletAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumContestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContestStatus | EnumContestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContestStatus[] | ListEnumContestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContestStatus[] | ListEnumContestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContestStatusFilter<$PrismaModel> | $Enums.ContestStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ContestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    entryAmount?: SortOrder
    creatorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    totalPool?: SortOrder
    createdAt?: SortOrder
  }

  export type ContestAvgOrderByAggregateInput = {
    entryAmount?: SortOrder
    totalPool?: SortOrder
  }

  export type ContestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    entryAmount?: SortOrder
    creatorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    totalPool?: SortOrder
    createdAt?: SortOrder
  }

  export type ContestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    entryAmount?: SortOrder
    creatorId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    totalPool?: SortOrder
    createdAt?: SortOrder
  }

  export type ContestSumOrderByAggregateInput = {
    entryAmount?: SortOrder
    totalPool?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumContestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContestStatus | EnumContestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContestStatus[] | ListEnumContestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContestStatus[] | ListEnumContestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContestStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContestStatusFilter<$PrismaModel>
    _max?: NestedEnumContestStatusFilter<$PrismaModel>
  }

  export type EnumAnswerenumFilter<$PrismaModel = never> = {
    equals?: $Enums.Answerenum | EnumAnswerenumFieldRefInput<$PrismaModel>
    in?: $Enums.Answerenum[] | ListEnumAnswerenumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Answerenum[] | ListEnumAnswerenumFieldRefInput<$PrismaModel>
    not?: NestedEnumAnswerenumFilter<$PrismaModel> | $Enums.Answerenum
  }

  export type ContestScalarRelationFilter = {
    is?: ContestWhereInput
    isNot?: ContestWhereInput
  }

  export type ParticipationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    amountPaid?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipationAvgOrderByAggregateInput = {
    amountPaid?: SortOrder
  }

  export type ParticipationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    amountPaid?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    amountPaid?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
  }

  export type ParticipationSumOrderByAggregateInput = {
    amountPaid?: SortOrder
  }

  export type EnumAnswerenumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Answerenum | EnumAnswerenumFieldRefInput<$PrismaModel>
    in?: $Enums.Answerenum[] | ListEnumAnswerenumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Answerenum[] | ListEnumAnswerenumFieldRefInput<$PrismaModel>
    not?: NestedEnumAnswerenumWithAggregatesFilter<$PrismaModel> | $Enums.Answerenum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnswerenumFilter<$PrismaModel>
    _max?: NestedEnumAnswerenumFilter<$PrismaModel>
  }

  export type WinnerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    reward?: SortOrder
    createdAt?: SortOrder
  }

  export type WinnerAvgOrderByAggregateInput = {
    reward?: SortOrder
  }

  export type WinnerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    reward?: SortOrder
    createdAt?: SortOrder
  }

  export type WinnerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contestId?: SortOrder
    reward?: SortOrder
    createdAt?: SortOrder
  }

  export type WinnerSumOrderByAggregateInput = {
    reward?: SortOrder
  }

  export type EnumTxnTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TxnType | EnumTxnTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxnType[] | ListEnumTxnTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxnType[] | ListEnumTxnTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxnTypeFilter<$PrismaModel> | $Enums.TxnType
  }

  export type EnumTxnStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TxnStatus | EnumTxnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TxnStatus[] | ListEnumTxnStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxnStatus[] | ListEnumTxnStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxnStatusFilter<$PrismaModel> | $Enums.TxnStatus
  }

  export type ContestNullableScalarRelationFilter = {
    is?: ContestWhereInput | null
    isNot?: ContestWhereInput | null
  }

  export type TxnHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    contestId?: SortOrder
    transactionHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TxnHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TxnHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    contestId?: SortOrder
    transactionHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TxnHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    contestId?: SortOrder
    transactionHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TxnHistorySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTxnTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxnType | EnumTxnTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxnType[] | ListEnumTxnTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxnType[] | ListEnumTxnTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxnTypeWithAggregatesFilter<$PrismaModel> | $Enums.TxnType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxnTypeFilter<$PrismaModel>
    _max?: NestedEnumTxnTypeFilter<$PrismaModel>
  }

  export type EnumTxnStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxnStatus | EnumTxnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TxnStatus[] | ListEnumTxnStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxnStatus[] | ListEnumTxnStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxnStatusWithAggregatesFilter<$PrismaModel> | $Enums.TxnStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxnStatusFilter<$PrismaModel>
    _max?: NestedEnumTxnStatusFilter<$PrismaModel>
  }

  export type ContestCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput> | ContestCreateWithoutCreatorInput[] | ContestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutCreatorInput | ContestCreateOrConnectWithoutCreatorInput[]
    createMany?: ContestCreateManyCreatorInputEnvelope
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
  }

  export type ParticipationCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput> | ParticipationCreateWithoutUserInput[] | ParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutUserInput | ParticipationCreateOrConnectWithoutUserInput[]
    createMany?: ParticipationCreateManyUserInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type TxnHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<TxnHistoryCreateWithoutUserInput, TxnHistoryUncheckedCreateWithoutUserInput> | TxnHistoryCreateWithoutUserInput[] | TxnHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TxnHistoryCreateOrConnectWithoutUserInput | TxnHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TxnHistoryCreateManyUserInputEnvelope
    connect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
  }

  export type WinnerCreateNestedManyWithoutUserInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type ContestUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput> | ContestCreateWithoutCreatorInput[] | ContestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutCreatorInput | ContestCreateOrConnectWithoutCreatorInput[]
    createMany?: ContestCreateManyCreatorInputEnvelope
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
  }

  export type ParticipationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput> | ParticipationCreateWithoutUserInput[] | ParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutUserInput | ParticipationCreateOrConnectWithoutUserInput[]
    createMany?: ParticipationCreateManyUserInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type TxnHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TxnHistoryCreateWithoutUserInput, TxnHistoryUncheckedCreateWithoutUserInput> | TxnHistoryCreateWithoutUserInput[] | TxnHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TxnHistoryCreateOrConnectWithoutUserInput | TxnHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TxnHistoryCreateManyUserInputEnvelope
    connect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ContestUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput> | ContestCreateWithoutCreatorInput[] | ContestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutCreatorInput | ContestCreateOrConnectWithoutCreatorInput[]
    upsert?: ContestUpsertWithWhereUniqueWithoutCreatorInput | ContestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContestCreateManyCreatorInputEnvelope
    set?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    disconnect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    delete?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    update?: ContestUpdateWithWhereUniqueWithoutCreatorInput | ContestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContestUpdateManyWithWhereWithoutCreatorInput | ContestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContestScalarWhereInput | ContestScalarWhereInput[]
  }

  export type ParticipationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput> | ParticipationCreateWithoutUserInput[] | ParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutUserInput | ParticipationCreateOrConnectWithoutUserInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutUserInput | ParticipationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipationCreateManyUserInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutUserInput | ParticipationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutUserInput | ParticipationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type TxnHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TxnHistoryCreateWithoutUserInput, TxnHistoryUncheckedCreateWithoutUserInput> | TxnHistoryCreateWithoutUserInput[] | TxnHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TxnHistoryCreateOrConnectWithoutUserInput | TxnHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TxnHistoryUpsertWithWhereUniqueWithoutUserInput | TxnHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TxnHistoryCreateManyUserInputEnvelope
    set?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    disconnect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    delete?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    connect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    update?: TxnHistoryUpdateWithWhereUniqueWithoutUserInput | TxnHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TxnHistoryUpdateManyWithWhereWithoutUserInput | TxnHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TxnHistoryScalarWhereInput | TxnHistoryScalarWhereInput[]
  }

  export type WinnerUpdateManyWithoutUserNestedInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutUserInput | WinnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutUserInput | WinnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutUserInput | WinnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type ContestUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput> | ContestCreateWithoutCreatorInput[] | ContestUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContestCreateOrConnectWithoutCreatorInput | ContestCreateOrConnectWithoutCreatorInput[]
    upsert?: ContestUpsertWithWhereUniqueWithoutCreatorInput | ContestUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContestCreateManyCreatorInputEnvelope
    set?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    disconnect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    delete?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    connect?: ContestWhereUniqueInput | ContestWhereUniqueInput[]
    update?: ContestUpdateWithWhereUniqueWithoutCreatorInput | ContestUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContestUpdateManyWithWhereWithoutCreatorInput | ContestUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContestScalarWhereInput | ContestScalarWhereInput[]
  }

  export type ParticipationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput> | ParticipationCreateWithoutUserInput[] | ParticipationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutUserInput | ParticipationCreateOrConnectWithoutUserInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutUserInput | ParticipationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ParticipationCreateManyUserInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutUserInput | ParticipationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutUserInput | ParticipationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type TxnHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TxnHistoryCreateWithoutUserInput, TxnHistoryUncheckedCreateWithoutUserInput> | TxnHistoryCreateWithoutUserInput[] | TxnHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TxnHistoryCreateOrConnectWithoutUserInput | TxnHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TxnHistoryUpsertWithWhereUniqueWithoutUserInput | TxnHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TxnHistoryCreateManyUserInputEnvelope
    set?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    disconnect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    delete?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    connect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    update?: TxnHistoryUpdateWithWhereUniqueWithoutUserInput | TxnHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TxnHistoryUpdateManyWithWhereWithoutUserInput | TxnHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TxnHistoryScalarWhereInput | TxnHistoryScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput> | WinnerCreateWithoutUserInput[] | WinnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutUserInput | WinnerCreateOrConnectWithoutUserInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutUserInput | WinnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WinnerCreateManyUserInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutUserInput | WinnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutUserInput | WinnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContestsCreatedInput = {
    create?: XOR<UserCreateWithoutContestsCreatedInput, UserUncheckedCreateWithoutContestsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type ParticipationCreateNestedManyWithoutContestInput = {
    create?: XOR<ParticipationCreateWithoutContestInput, ParticipationUncheckedCreateWithoutContestInput> | ParticipationCreateWithoutContestInput[] | ParticipationUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutContestInput | ParticipationCreateOrConnectWithoutContestInput[]
    createMany?: ParticipationCreateManyContestInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type WinnerCreateNestedManyWithoutContestInput = {
    create?: XOR<WinnerCreateWithoutContestInput, WinnerUncheckedCreateWithoutContestInput> | WinnerCreateWithoutContestInput[] | WinnerUncheckedCreateWithoutContestInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutContestInput | WinnerCreateOrConnectWithoutContestInput[]
    createMany?: WinnerCreateManyContestInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type TxnHistoryCreateNestedManyWithoutContestInput = {
    create?: XOR<TxnHistoryCreateWithoutContestInput, TxnHistoryUncheckedCreateWithoutContestInput> | TxnHistoryCreateWithoutContestInput[] | TxnHistoryUncheckedCreateWithoutContestInput[]
    connectOrCreate?: TxnHistoryCreateOrConnectWithoutContestInput | TxnHistoryCreateOrConnectWithoutContestInput[]
    createMany?: TxnHistoryCreateManyContestInputEnvelope
    connect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
  }

  export type ParticipationUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<ParticipationCreateWithoutContestInput, ParticipationUncheckedCreateWithoutContestInput> | ParticipationCreateWithoutContestInput[] | ParticipationUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutContestInput | ParticipationCreateOrConnectWithoutContestInput[]
    createMany?: ParticipationCreateManyContestInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type WinnerUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<WinnerCreateWithoutContestInput, WinnerUncheckedCreateWithoutContestInput> | WinnerCreateWithoutContestInput[] | WinnerUncheckedCreateWithoutContestInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutContestInput | WinnerCreateOrConnectWithoutContestInput[]
    createMany?: WinnerCreateManyContestInputEnvelope
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
  }

  export type TxnHistoryUncheckedCreateNestedManyWithoutContestInput = {
    create?: XOR<TxnHistoryCreateWithoutContestInput, TxnHistoryUncheckedCreateWithoutContestInput> | TxnHistoryCreateWithoutContestInput[] | TxnHistoryUncheckedCreateWithoutContestInput[]
    connectOrCreate?: TxnHistoryCreateOrConnectWithoutContestInput | TxnHistoryCreateOrConnectWithoutContestInput[]
    createMany?: TxnHistoryCreateManyContestInputEnvelope
    connect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumContestStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContestStatus
  }

  export type UserUpdateOneRequiredWithoutContestsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutContestsCreatedInput, UserUncheckedCreateWithoutContestsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutContestsCreatedInput
    upsert?: UserUpsertWithoutContestsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContestsCreatedInput, UserUpdateWithoutContestsCreatedInput>, UserUncheckedUpdateWithoutContestsCreatedInput>
  }

  export type ParticipationUpdateManyWithoutContestNestedInput = {
    create?: XOR<ParticipationCreateWithoutContestInput, ParticipationUncheckedCreateWithoutContestInput> | ParticipationCreateWithoutContestInput[] | ParticipationUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutContestInput | ParticipationCreateOrConnectWithoutContestInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutContestInput | ParticipationUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ParticipationCreateManyContestInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutContestInput | ParticipationUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutContestInput | ParticipationUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type WinnerUpdateManyWithoutContestNestedInput = {
    create?: XOR<WinnerCreateWithoutContestInput, WinnerUncheckedCreateWithoutContestInput> | WinnerCreateWithoutContestInput[] | WinnerUncheckedCreateWithoutContestInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutContestInput | WinnerCreateOrConnectWithoutContestInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutContestInput | WinnerUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: WinnerCreateManyContestInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutContestInput | WinnerUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutContestInput | WinnerUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type TxnHistoryUpdateManyWithoutContestNestedInput = {
    create?: XOR<TxnHistoryCreateWithoutContestInput, TxnHistoryUncheckedCreateWithoutContestInput> | TxnHistoryCreateWithoutContestInput[] | TxnHistoryUncheckedCreateWithoutContestInput[]
    connectOrCreate?: TxnHistoryCreateOrConnectWithoutContestInput | TxnHistoryCreateOrConnectWithoutContestInput[]
    upsert?: TxnHistoryUpsertWithWhereUniqueWithoutContestInput | TxnHistoryUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: TxnHistoryCreateManyContestInputEnvelope
    set?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    disconnect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    delete?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    connect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    update?: TxnHistoryUpdateWithWhereUniqueWithoutContestInput | TxnHistoryUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: TxnHistoryUpdateManyWithWhereWithoutContestInput | TxnHistoryUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: TxnHistoryScalarWhereInput | TxnHistoryScalarWhereInput[]
  }

  export type ParticipationUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<ParticipationCreateWithoutContestInput, ParticipationUncheckedCreateWithoutContestInput> | ParticipationCreateWithoutContestInput[] | ParticipationUncheckedCreateWithoutContestInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutContestInput | ParticipationCreateOrConnectWithoutContestInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutContestInput | ParticipationUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: ParticipationCreateManyContestInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutContestInput | ParticipationUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutContestInput | ParticipationUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type WinnerUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<WinnerCreateWithoutContestInput, WinnerUncheckedCreateWithoutContestInput> | WinnerCreateWithoutContestInput[] | WinnerUncheckedCreateWithoutContestInput[]
    connectOrCreate?: WinnerCreateOrConnectWithoutContestInput | WinnerCreateOrConnectWithoutContestInput[]
    upsert?: WinnerUpsertWithWhereUniqueWithoutContestInput | WinnerUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: WinnerCreateManyContestInputEnvelope
    set?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    disconnect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    delete?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    connect?: WinnerWhereUniqueInput | WinnerWhereUniqueInput[]
    update?: WinnerUpdateWithWhereUniqueWithoutContestInput | WinnerUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: WinnerUpdateManyWithWhereWithoutContestInput | WinnerUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
  }

  export type TxnHistoryUncheckedUpdateManyWithoutContestNestedInput = {
    create?: XOR<TxnHistoryCreateWithoutContestInput, TxnHistoryUncheckedCreateWithoutContestInput> | TxnHistoryCreateWithoutContestInput[] | TxnHistoryUncheckedCreateWithoutContestInput[]
    connectOrCreate?: TxnHistoryCreateOrConnectWithoutContestInput | TxnHistoryCreateOrConnectWithoutContestInput[]
    upsert?: TxnHistoryUpsertWithWhereUniqueWithoutContestInput | TxnHistoryUpsertWithWhereUniqueWithoutContestInput[]
    createMany?: TxnHistoryCreateManyContestInputEnvelope
    set?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    disconnect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    delete?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    connect?: TxnHistoryWhereUniqueInput | TxnHistoryWhereUniqueInput[]
    update?: TxnHistoryUpdateWithWhereUniqueWithoutContestInput | TxnHistoryUpdateWithWhereUniqueWithoutContestInput[]
    updateMany?: TxnHistoryUpdateManyWithWhereWithoutContestInput | TxnHistoryUpdateManyWithWhereWithoutContestInput[]
    deleteMany?: TxnHistoryScalarWhereInput | TxnHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    connect?: UserWhereUniqueInput
  }

  export type ContestCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<ContestCreateWithoutParticipationsInput, ContestUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutParticipationsInput
    connect?: ContestWhereUniqueInput
  }

  export type EnumAnswerenumFieldUpdateOperationsInput = {
    set?: $Enums.Answerenum
  }

  export type UserUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutParticipationsInput
    upsert?: UserUpsertWithoutParticipationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutParticipationsInput, UserUpdateWithoutParticipationsInput>, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type ContestUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<ContestCreateWithoutParticipationsInput, ContestUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: ContestCreateOrConnectWithoutParticipationsInput
    upsert?: ContestUpsertWithoutParticipationsInput
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutParticipationsInput, ContestUpdateWithoutParticipationsInput>, ContestUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserCreateNestedOneWithoutWinnersInput = {
    create?: XOR<UserCreateWithoutWinnersInput, UserUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutWinnersInput
    connect?: UserWhereUniqueInput
  }

  export type ContestCreateNestedOneWithoutWinnersInput = {
    create?: XOR<ContestCreateWithoutWinnersInput, ContestUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: ContestCreateOrConnectWithoutWinnersInput
    connect?: ContestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<UserCreateWithoutWinnersInput, UserUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutWinnersInput
    upsert?: UserUpsertWithoutWinnersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWinnersInput, UserUpdateWithoutWinnersInput>, UserUncheckedUpdateWithoutWinnersInput>
  }

  export type ContestUpdateOneRequiredWithoutWinnersNestedInput = {
    create?: XOR<ContestCreateWithoutWinnersInput, ContestUncheckedCreateWithoutWinnersInput>
    connectOrCreate?: ContestCreateOrConnectWithoutWinnersInput
    upsert?: ContestUpsertWithoutWinnersInput
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutWinnersInput, ContestUpdateWithoutWinnersInput>, ContestUncheckedUpdateWithoutWinnersInput>
  }

  export type UserCreateNestedOneWithoutTxnsInput = {
    create?: XOR<UserCreateWithoutTxnsInput, UserUncheckedCreateWithoutTxnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTxnsInput
    connect?: UserWhereUniqueInput
  }

  export type ContestCreateNestedOneWithoutTxnHistoryInput = {
    create?: XOR<ContestCreateWithoutTxnHistoryInput, ContestUncheckedCreateWithoutTxnHistoryInput>
    connectOrCreate?: ContestCreateOrConnectWithoutTxnHistoryInput
    connect?: ContestWhereUniqueInput
  }

  export type EnumTxnTypeFieldUpdateOperationsInput = {
    set?: $Enums.TxnType
  }

  export type EnumTxnStatusFieldUpdateOperationsInput = {
    set?: $Enums.TxnStatus
  }

  export type UserUpdateOneRequiredWithoutTxnsNestedInput = {
    create?: XOR<UserCreateWithoutTxnsInput, UserUncheckedCreateWithoutTxnsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTxnsInput
    upsert?: UserUpsertWithoutTxnsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTxnsInput, UserUpdateWithoutTxnsInput>, UserUncheckedUpdateWithoutTxnsInput>
  }

  export type ContestUpdateOneWithoutTxnHistoryNestedInput = {
    create?: XOR<ContestCreateWithoutTxnHistoryInput, ContestUncheckedCreateWithoutTxnHistoryInput>
    connectOrCreate?: ContestCreateOrConnectWithoutTxnHistoryInput
    upsert?: ContestUpsertWithoutTxnHistoryInput
    disconnect?: ContestWhereInput | boolean
    delete?: ContestWhereInput | boolean
    connect?: ContestWhereUniqueInput
    update?: XOR<XOR<ContestUpdateToOneWithWhereWithoutTxnHistoryInput, ContestUpdateWithoutTxnHistoryInput>, ContestUncheckedUpdateWithoutTxnHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumContestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContestStatus | EnumContestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContestStatus[] | ListEnumContestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContestStatus[] | ListEnumContestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContestStatusFilter<$PrismaModel> | $Enums.ContestStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumContestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContestStatus | EnumContestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContestStatus[] | ListEnumContestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContestStatus[] | ListEnumContestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumContestStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContestStatusFilter<$PrismaModel>
    _max?: NestedEnumContestStatusFilter<$PrismaModel>
  }

  export type NestedEnumAnswerenumFilter<$PrismaModel = never> = {
    equals?: $Enums.Answerenum | EnumAnswerenumFieldRefInput<$PrismaModel>
    in?: $Enums.Answerenum[] | ListEnumAnswerenumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Answerenum[] | ListEnumAnswerenumFieldRefInput<$PrismaModel>
    not?: NestedEnumAnswerenumFilter<$PrismaModel> | $Enums.Answerenum
  }

  export type NestedEnumAnswerenumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Answerenum | EnumAnswerenumFieldRefInput<$PrismaModel>
    in?: $Enums.Answerenum[] | ListEnumAnswerenumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Answerenum[] | ListEnumAnswerenumFieldRefInput<$PrismaModel>
    not?: NestedEnumAnswerenumWithAggregatesFilter<$PrismaModel> | $Enums.Answerenum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnswerenumFilter<$PrismaModel>
    _max?: NestedEnumAnswerenumFilter<$PrismaModel>
  }

  export type NestedEnumTxnTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TxnType | EnumTxnTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxnType[] | ListEnumTxnTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxnType[] | ListEnumTxnTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxnTypeFilter<$PrismaModel> | $Enums.TxnType
  }

  export type NestedEnumTxnStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TxnStatus | EnumTxnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TxnStatus[] | ListEnumTxnStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxnStatus[] | ListEnumTxnStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxnStatusFilter<$PrismaModel> | $Enums.TxnStatus
  }

  export type NestedEnumTxnTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxnType | EnumTxnTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxnType[] | ListEnumTxnTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxnType[] | ListEnumTxnTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxnTypeWithAggregatesFilter<$PrismaModel> | $Enums.TxnType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxnTypeFilter<$PrismaModel>
    _max?: NestedEnumTxnTypeFilter<$PrismaModel>
  }

  export type NestedEnumTxnStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxnStatus | EnumTxnStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TxnStatus[] | ListEnumTxnStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxnStatus[] | ListEnumTxnStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTxnStatusWithAggregatesFilter<$PrismaModel> | $Enums.TxnStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxnStatusFilter<$PrismaModel>
    _max?: NestedEnumTxnStatusFilter<$PrismaModel>
  }

  export type ContestCreateWithoutCreatorInput = {
    id?: string
    title: string
    entryAmount: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    participations?: ParticipationCreateNestedManyWithoutContestInput
    winners?: WinnerCreateNestedManyWithoutContestInput
    txnHistory?: TxnHistoryCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    entryAmount: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    participations?: ParticipationUncheckedCreateNestedManyWithoutContestInput
    winners?: WinnerUncheckedCreateNestedManyWithoutContestInput
    txnHistory?: TxnHistoryUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutCreatorInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput>
  }

  export type ContestCreateManyCreatorInputEnvelope = {
    data: ContestCreateManyCreatorInput | ContestCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ParticipationCreateWithoutUserInput = {
    id?: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt?: Date | string
    contest: ContestCreateNestedOneWithoutParticipationsInput
  }

  export type ParticipationUncheckedCreateWithoutUserInput = {
    id?: string
    contestId: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt?: Date | string
  }

  export type ParticipationCreateOrConnectWithoutUserInput = {
    where: ParticipationWhereUniqueInput
    create: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput>
  }

  export type ParticipationCreateManyUserInputEnvelope = {
    data: ParticipationCreateManyUserInput | ParticipationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TxnHistoryCreateWithoutUserInput = {
    id?: string
    type: $Enums.TxnType
    amount: number
    transactionHash?: string | null
    status?: $Enums.TxnStatus
    createdAt?: Date | string
    contest?: ContestCreateNestedOneWithoutTxnHistoryInput
  }

  export type TxnHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.TxnType
    amount: number
    contestId?: string | null
    transactionHash?: string | null
    status?: $Enums.TxnStatus
    createdAt?: Date | string
  }

  export type TxnHistoryCreateOrConnectWithoutUserInput = {
    where: TxnHistoryWhereUniqueInput
    create: XOR<TxnHistoryCreateWithoutUserInput, TxnHistoryUncheckedCreateWithoutUserInput>
  }

  export type TxnHistoryCreateManyUserInputEnvelope = {
    data: TxnHistoryCreateManyUserInput | TxnHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WinnerCreateWithoutUserInput = {
    id?: string
    reward: number
    createdAt?: Date | string
    contest: ContestCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateWithoutUserInput = {
    id?: string
    contestId: string
    reward: number
    createdAt?: Date | string
  }

  export type WinnerCreateOrConnectWithoutUserInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput>
  }

  export type WinnerCreateManyUserInputEnvelope = {
    data: WinnerCreateManyUserInput | WinnerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContestUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ContestWhereUniqueInput
    update: XOR<ContestUpdateWithoutCreatorInput, ContestUncheckedUpdateWithoutCreatorInput>
    create: XOR<ContestCreateWithoutCreatorInput, ContestUncheckedCreateWithoutCreatorInput>
  }

  export type ContestUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ContestWhereUniqueInput
    data: XOR<ContestUpdateWithoutCreatorInput, ContestUncheckedUpdateWithoutCreatorInput>
  }

  export type ContestUpdateManyWithWhereWithoutCreatorInput = {
    where: ContestScalarWhereInput
    data: XOR<ContestUpdateManyMutationInput, ContestUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ContestScalarWhereInput = {
    AND?: ContestScalarWhereInput | ContestScalarWhereInput[]
    OR?: ContestScalarWhereInput[]
    NOT?: ContestScalarWhereInput | ContestScalarWhereInput[]
    id?: StringFilter<"Contest"> | string
    title?: StringFilter<"Contest"> | string
    entryAmount?: FloatFilter<"Contest"> | number
    creatorId?: StringFilter<"Contest"> | string
    startTime?: DateTimeFilter<"Contest"> | Date | string
    endTime?: DateTimeFilter<"Contest"> | Date | string
    status?: EnumContestStatusFilter<"Contest"> | $Enums.ContestStatus
    totalPool?: FloatFilter<"Contest"> | number
    createdAt?: DateTimeFilter<"Contest"> | Date | string
  }

  export type ParticipationUpsertWithWhereUniqueWithoutUserInput = {
    where: ParticipationWhereUniqueInput
    update: XOR<ParticipationUpdateWithoutUserInput, ParticipationUncheckedUpdateWithoutUserInput>
    create: XOR<ParticipationCreateWithoutUserInput, ParticipationUncheckedCreateWithoutUserInput>
  }

  export type ParticipationUpdateWithWhereUniqueWithoutUserInput = {
    where: ParticipationWhereUniqueInput
    data: XOR<ParticipationUpdateWithoutUserInput, ParticipationUncheckedUpdateWithoutUserInput>
  }

  export type ParticipationUpdateManyWithWhereWithoutUserInput = {
    where: ParticipationScalarWhereInput
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyWithoutUserInput>
  }

  export type ParticipationScalarWhereInput = {
    AND?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
    OR?: ParticipationScalarWhereInput[]
    NOT?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
    id?: StringFilter<"Participation"> | string
    userId?: StringFilter<"Participation"> | string
    contestId?: StringFilter<"Participation"> | string
    amountPaid?: FloatFilter<"Participation"> | number
    answer?: EnumAnswerenumFilter<"Participation"> | $Enums.Answerenum
    createdAt?: DateTimeFilter<"Participation"> | Date | string
  }

  export type TxnHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: TxnHistoryWhereUniqueInput
    update: XOR<TxnHistoryUpdateWithoutUserInput, TxnHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<TxnHistoryCreateWithoutUserInput, TxnHistoryUncheckedCreateWithoutUserInput>
  }

  export type TxnHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: TxnHistoryWhereUniqueInput
    data: XOR<TxnHistoryUpdateWithoutUserInput, TxnHistoryUncheckedUpdateWithoutUserInput>
  }

  export type TxnHistoryUpdateManyWithWhereWithoutUserInput = {
    where: TxnHistoryScalarWhereInput
    data: XOR<TxnHistoryUpdateManyMutationInput, TxnHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type TxnHistoryScalarWhereInput = {
    AND?: TxnHistoryScalarWhereInput | TxnHistoryScalarWhereInput[]
    OR?: TxnHistoryScalarWhereInput[]
    NOT?: TxnHistoryScalarWhereInput | TxnHistoryScalarWhereInput[]
    id?: StringFilter<"TxnHistory"> | string
    userId?: StringFilter<"TxnHistory"> | string
    type?: EnumTxnTypeFilter<"TxnHistory"> | $Enums.TxnType
    amount?: FloatFilter<"TxnHistory"> | number
    contestId?: StringNullableFilter<"TxnHistory"> | string | null
    transactionHash?: StringNullableFilter<"TxnHistory"> | string | null
    status?: EnumTxnStatusFilter<"TxnHistory"> | $Enums.TxnStatus
    createdAt?: DateTimeFilter<"TxnHistory"> | Date | string
  }

  export type WinnerUpsertWithWhereUniqueWithoutUserInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutUserInput, WinnerUncheckedUpdateWithoutUserInput>
    create: XOR<WinnerCreateWithoutUserInput, WinnerUncheckedCreateWithoutUserInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutUserInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutUserInput, WinnerUncheckedUpdateWithoutUserInput>
  }

  export type WinnerUpdateManyWithWhereWithoutUserInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutUserInput>
  }

  export type WinnerScalarWhereInput = {
    AND?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    OR?: WinnerScalarWhereInput[]
    NOT?: WinnerScalarWhereInput | WinnerScalarWhereInput[]
    id?: StringFilter<"Winner"> | string
    userId?: StringFilter<"Winner"> | string
    contestId?: StringFilter<"Winner"> | string
    reward?: FloatFilter<"Winner"> | number
    createdAt?: DateTimeFilter<"Winner"> | Date | string
  }

  export type UserCreateWithoutContestsCreatedInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    participations?: ParticipationCreateNestedManyWithoutUserInput
    txns?: TxnHistoryCreateNestedManyWithoutUserInput
    winners?: WinnerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContestsCreatedInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    txns?: TxnHistoryUncheckedCreateNestedManyWithoutUserInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContestsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContestsCreatedInput, UserUncheckedCreateWithoutContestsCreatedInput>
  }

  export type ParticipationCreateWithoutContestInput = {
    id?: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutParticipationsInput
  }

  export type ParticipationUncheckedCreateWithoutContestInput = {
    id?: string
    userId: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt?: Date | string
  }

  export type ParticipationCreateOrConnectWithoutContestInput = {
    where: ParticipationWhereUniqueInput
    create: XOR<ParticipationCreateWithoutContestInput, ParticipationUncheckedCreateWithoutContestInput>
  }

  export type ParticipationCreateManyContestInputEnvelope = {
    data: ParticipationCreateManyContestInput | ParticipationCreateManyContestInput[]
    skipDuplicates?: boolean
  }

  export type WinnerCreateWithoutContestInput = {
    id?: string
    reward: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWinnersInput
  }

  export type WinnerUncheckedCreateWithoutContestInput = {
    id?: string
    userId: string
    reward: number
    createdAt?: Date | string
  }

  export type WinnerCreateOrConnectWithoutContestInput = {
    where: WinnerWhereUniqueInput
    create: XOR<WinnerCreateWithoutContestInput, WinnerUncheckedCreateWithoutContestInput>
  }

  export type WinnerCreateManyContestInputEnvelope = {
    data: WinnerCreateManyContestInput | WinnerCreateManyContestInput[]
    skipDuplicates?: boolean
  }

  export type TxnHistoryCreateWithoutContestInput = {
    id?: string
    type: $Enums.TxnType
    amount: number
    transactionHash?: string | null
    status?: $Enums.TxnStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTxnsInput
  }

  export type TxnHistoryUncheckedCreateWithoutContestInput = {
    id?: string
    userId: string
    type: $Enums.TxnType
    amount: number
    transactionHash?: string | null
    status?: $Enums.TxnStatus
    createdAt?: Date | string
  }

  export type TxnHistoryCreateOrConnectWithoutContestInput = {
    where: TxnHistoryWhereUniqueInput
    create: XOR<TxnHistoryCreateWithoutContestInput, TxnHistoryUncheckedCreateWithoutContestInput>
  }

  export type TxnHistoryCreateManyContestInputEnvelope = {
    data: TxnHistoryCreateManyContestInput | TxnHistoryCreateManyContestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContestsCreatedInput = {
    update: XOR<UserUpdateWithoutContestsCreatedInput, UserUncheckedUpdateWithoutContestsCreatedInput>
    create: XOR<UserCreateWithoutContestsCreatedInput, UserUncheckedCreateWithoutContestsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContestsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContestsCreatedInput, UserUncheckedUpdateWithoutContestsCreatedInput>
  }

  export type UserUpdateWithoutContestsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    txns?: TxnHistoryUpdateManyWithoutUserNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContestsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    txns?: TxnHistoryUncheckedUpdateManyWithoutUserNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParticipationUpsertWithWhereUniqueWithoutContestInput = {
    where: ParticipationWhereUniqueInput
    update: XOR<ParticipationUpdateWithoutContestInput, ParticipationUncheckedUpdateWithoutContestInput>
    create: XOR<ParticipationCreateWithoutContestInput, ParticipationUncheckedCreateWithoutContestInput>
  }

  export type ParticipationUpdateWithWhereUniqueWithoutContestInput = {
    where: ParticipationWhereUniqueInput
    data: XOR<ParticipationUpdateWithoutContestInput, ParticipationUncheckedUpdateWithoutContestInput>
  }

  export type ParticipationUpdateManyWithWhereWithoutContestInput = {
    where: ParticipationScalarWhereInput
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyWithoutContestInput>
  }

  export type WinnerUpsertWithWhereUniqueWithoutContestInput = {
    where: WinnerWhereUniqueInput
    update: XOR<WinnerUpdateWithoutContestInput, WinnerUncheckedUpdateWithoutContestInput>
    create: XOR<WinnerCreateWithoutContestInput, WinnerUncheckedCreateWithoutContestInput>
  }

  export type WinnerUpdateWithWhereUniqueWithoutContestInput = {
    where: WinnerWhereUniqueInput
    data: XOR<WinnerUpdateWithoutContestInput, WinnerUncheckedUpdateWithoutContestInput>
  }

  export type WinnerUpdateManyWithWhereWithoutContestInput = {
    where: WinnerScalarWhereInput
    data: XOR<WinnerUpdateManyMutationInput, WinnerUncheckedUpdateManyWithoutContestInput>
  }

  export type TxnHistoryUpsertWithWhereUniqueWithoutContestInput = {
    where: TxnHistoryWhereUniqueInput
    update: XOR<TxnHistoryUpdateWithoutContestInput, TxnHistoryUncheckedUpdateWithoutContestInput>
    create: XOR<TxnHistoryCreateWithoutContestInput, TxnHistoryUncheckedCreateWithoutContestInput>
  }

  export type TxnHistoryUpdateWithWhereUniqueWithoutContestInput = {
    where: TxnHistoryWhereUniqueInput
    data: XOR<TxnHistoryUpdateWithoutContestInput, TxnHistoryUncheckedUpdateWithoutContestInput>
  }

  export type TxnHistoryUpdateManyWithWhereWithoutContestInput = {
    where: TxnHistoryScalarWhereInput
    data: XOR<TxnHistoryUpdateManyMutationInput, TxnHistoryUncheckedUpdateManyWithoutContestInput>
  }

  export type UserCreateWithoutParticipationsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    txns?: TxnHistoryCreateNestedManyWithoutUserInput
    winners?: WinnerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutParticipationsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    txns?: TxnHistoryUncheckedCreateNestedManyWithoutUserInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutParticipationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
  }

  export type ContestCreateWithoutParticipationsInput = {
    id?: string
    title: string
    entryAmount: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutContestsCreatedInput
    winners?: WinnerCreateNestedManyWithoutContestInput
    txnHistory?: TxnHistoryCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutParticipationsInput = {
    id?: string
    title: string
    entryAmount: number
    creatorId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    winners?: WinnerUncheckedCreateNestedManyWithoutContestInput
    txnHistory?: TxnHistoryUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutParticipationsInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutParticipationsInput, ContestUncheckedCreateWithoutParticipationsInput>
  }

  export type UserUpsertWithoutParticipationsInput = {
    update: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
    create: XOR<UserCreateWithoutParticipationsInput, UserUncheckedCreateWithoutParticipationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutParticipationsInput, UserUncheckedUpdateWithoutParticipationsInput>
  }

  export type UserUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    txns?: TxnHistoryUpdateManyWithoutUserNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    txns?: TxnHistoryUncheckedUpdateManyWithoutUserNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContestUpsertWithoutParticipationsInput = {
    update: XOR<ContestUpdateWithoutParticipationsInput, ContestUncheckedUpdateWithoutParticipationsInput>
    create: XOR<ContestCreateWithoutParticipationsInput, ContestUncheckedCreateWithoutParticipationsInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutParticipationsInput, ContestUncheckedUpdateWithoutParticipationsInput>
  }

  export type ContestUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContestsCreatedNestedInput
    winners?: WinnerUpdateManyWithoutContestNestedInput
    txnHistory?: TxnHistoryUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winners?: WinnerUncheckedUpdateManyWithoutContestNestedInput
    txnHistory?: TxnHistoryUncheckedUpdateManyWithoutContestNestedInput
  }

  export type UserCreateWithoutWinnersInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    txns?: TxnHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWinnersInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    txns?: TxnHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWinnersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWinnersInput, UserUncheckedCreateWithoutWinnersInput>
  }

  export type ContestCreateWithoutWinnersInput = {
    id?: string
    title: string
    entryAmount: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutContestsCreatedInput
    participations?: ParticipationCreateNestedManyWithoutContestInput
    txnHistory?: TxnHistoryCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutWinnersInput = {
    id?: string
    title: string
    entryAmount: number
    creatorId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    participations?: ParticipationUncheckedCreateNestedManyWithoutContestInput
    txnHistory?: TxnHistoryUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutWinnersInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutWinnersInput, ContestUncheckedCreateWithoutWinnersInput>
  }

  export type UserUpsertWithoutWinnersInput = {
    update: XOR<UserUpdateWithoutWinnersInput, UserUncheckedUpdateWithoutWinnersInput>
    create: XOR<UserCreateWithoutWinnersInput, UserUncheckedCreateWithoutWinnersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWinnersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWinnersInput, UserUncheckedUpdateWithoutWinnersInput>
  }

  export type UserUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    txns?: TxnHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    txns?: TxnHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContestUpsertWithoutWinnersInput = {
    update: XOR<ContestUpdateWithoutWinnersInput, ContestUncheckedUpdateWithoutWinnersInput>
    create: XOR<ContestCreateWithoutWinnersInput, ContestUncheckedCreateWithoutWinnersInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutWinnersInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutWinnersInput, ContestUncheckedUpdateWithoutWinnersInput>
  }

  export type ContestUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContestsCreatedNestedInput
    participations?: ParticipationUpdateManyWithoutContestNestedInput
    txnHistory?: TxnHistoryUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutWinnersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: ParticipationUncheckedUpdateManyWithoutContestNestedInput
    txnHistory?: TxnHistoryUncheckedUpdateManyWithoutContestNestedInput
  }

  export type UserCreateWithoutTxnsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    contestsCreated?: ContestCreateNestedManyWithoutCreatorInput
    participations?: ParticipationCreateNestedManyWithoutUserInput
    winners?: WinnerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTxnsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    name?: string | null
    walletAddress?: string | null
    createdAt?: Date | string
    contestsCreated?: ContestUncheckedCreateNestedManyWithoutCreatorInput
    participations?: ParticipationUncheckedCreateNestedManyWithoutUserInput
    winners?: WinnerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTxnsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTxnsInput, UserUncheckedCreateWithoutTxnsInput>
  }

  export type ContestCreateWithoutTxnHistoryInput = {
    id?: string
    title: string
    entryAmount: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutContestsCreatedInput
    participations?: ParticipationCreateNestedManyWithoutContestInput
    winners?: WinnerCreateNestedManyWithoutContestInput
  }

  export type ContestUncheckedCreateWithoutTxnHistoryInput = {
    id?: string
    title: string
    entryAmount: number
    creatorId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
    participations?: ParticipationUncheckedCreateNestedManyWithoutContestInput
    winners?: WinnerUncheckedCreateNestedManyWithoutContestInput
  }

  export type ContestCreateOrConnectWithoutTxnHistoryInput = {
    where: ContestWhereUniqueInput
    create: XOR<ContestCreateWithoutTxnHistoryInput, ContestUncheckedCreateWithoutTxnHistoryInput>
  }

  export type UserUpsertWithoutTxnsInput = {
    update: XOR<UserUpdateWithoutTxnsInput, UserUncheckedUpdateWithoutTxnsInput>
    create: XOR<UserCreateWithoutTxnsInput, UserUncheckedCreateWithoutTxnsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTxnsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTxnsInput, UserUncheckedUpdateWithoutTxnsInput>
  }

  export type UserUpdateWithoutTxnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestsCreated?: ContestUpdateManyWithoutCreatorNestedInput
    participations?: ParticipationUpdateManyWithoutUserNestedInput
    winners?: WinnerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTxnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    walletAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contestsCreated?: ContestUncheckedUpdateManyWithoutCreatorNestedInput
    participations?: ParticipationUncheckedUpdateManyWithoutUserNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContestUpsertWithoutTxnHistoryInput = {
    update: XOR<ContestUpdateWithoutTxnHistoryInput, ContestUncheckedUpdateWithoutTxnHistoryInput>
    create: XOR<ContestCreateWithoutTxnHistoryInput, ContestUncheckedCreateWithoutTxnHistoryInput>
    where?: ContestWhereInput
  }

  export type ContestUpdateToOneWithWhereWithoutTxnHistoryInput = {
    where?: ContestWhereInput
    data: XOR<ContestUpdateWithoutTxnHistoryInput, ContestUncheckedUpdateWithoutTxnHistoryInput>
  }

  export type ContestUpdateWithoutTxnHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContestsCreatedNestedInput
    participations?: ParticipationUpdateManyWithoutContestNestedInput
    winners?: WinnerUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutTxnHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: ParticipationUncheckedUpdateManyWithoutContestNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestCreateManyCreatorInput = {
    id?: string
    title: string
    entryAmount: number
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ContestStatus
    totalPool?: number
    createdAt?: Date | string
  }

  export type ParticipationCreateManyUserInput = {
    id?: string
    contestId: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt?: Date | string
  }

  export type TxnHistoryCreateManyUserInput = {
    id?: string
    type: $Enums.TxnType
    amount: number
    contestId?: string | null
    transactionHash?: string | null
    status?: $Enums.TxnStatus
    createdAt?: Date | string
  }

  export type WinnerCreateManyUserInput = {
    id?: string
    contestId: string
    reward: number
    createdAt?: Date | string
  }

  export type ContestUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: ParticipationUpdateManyWithoutContestNestedInput
    winners?: WinnerUpdateManyWithoutContestNestedInput
    txnHistory?: TxnHistoryUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: ParticipationUncheckedUpdateManyWithoutContestNestedInput
    winners?: WinnerUncheckedUpdateManyWithoutContestNestedInput
    txnHistory?: TxnHistoryUncheckedUpdateManyWithoutContestNestedInput
  }

  export type ContestUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    entryAmount?: FloatFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumContestStatusFieldUpdateOperationsInput | $Enums.ContestStatus
    totalPool?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type ParticipationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TxnHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneWithoutTxnHistoryNestedInput
  }

  export type TxnHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TxnHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    contestId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contest?: ContestUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contestId?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationCreateManyContestInput = {
    id?: string
    userId: string
    amountPaid: number
    answer: $Enums.Answerenum
    createdAt?: Date | string
  }

  export type WinnerCreateManyContestInput = {
    id?: string
    userId: string
    reward: number
    createdAt?: Date | string
  }

  export type TxnHistoryCreateManyContestInput = {
    id?: string
    userId: string
    type: $Enums.TxnType
    amount: number
    transactionHash?: string | null
    status?: $Enums.TxnStatus
    createdAt?: Date | string
  }

  export type ParticipationUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type ParticipationUncheckedUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationUncheckedUpdateManyWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountPaid?: FloatFieldUpdateOperationsInput | number
    answer?: EnumAnswerenumFieldUpdateOperationsInput | $Enums.Answerenum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWinnersNestedInput
  }

  export type WinnerUncheckedUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WinnerUncheckedUpdateManyWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reward?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TxnHistoryUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTxnsNestedInput
  }

  export type TxnHistoryUncheckedUpdateWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TxnHistoryUncheckedUpdateManyWithoutContestInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumTxnTypeFieldUpdateOperationsInput | $Enums.TxnType
    amount?: FloatFieldUpdateOperationsInput | number
    transactionHash?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTxnStatusFieldUpdateOperationsInput | $Enums.TxnStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}