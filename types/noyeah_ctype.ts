/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/noyeah_c.json`.
 */
export type NoyeahC = {
    "address": "2S2ztAYPLzQN3McM2jJqNhoycahBMpyEc1tvNLBdR2qv",
    "metadata": {
      "name": "noyeahC",
      "version": "0.1.0",
      "spec": "0.1.0",
      "description": "Created with Anchor"
    },
    "instructions": [
      {
        "name": "createContest",
        "discriminator": [
          129,
          189,
          164,
          27,
          152,
          242,
          123,
          93
        ],
        "accounts": [
          {
            "name": "signer",
            "writable": true,
            "signer": true
          },
          {
            "name": "createContest",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    99,
                    111,
                    110,
                    116,
                    101,
                    115,
                    116
                  ]
                },
                {
                  "kind": "arg",
                  "path": "title"
                }
              ]
            }
          },
          {
            "name": "contestVaultAccount",
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    118,
                    97,
                    117,
                    108,
                    116
                  ]
                },
                {
                  "kind": "account",
                  "path": "createContest"
                }
              ]
            }
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "entryFee",
            "type": "u64"
          }
        ]
      },
      {
        "name": "finalizeContest",
        "discriminator": [
          16,
          124,
          112,
          152,
          40,
          27,
          32,
          221
        ],
        "accounts": [
          {
            "name": "payer",
            "writable": true,
            "signer": true
          },
          {
            "name": "contestAccount",
            "writable": true
          },
          {
            "name": "participant",
            "writable": true
          },
          {
            "name": "contestVault",
            "writable": true
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": []
      },
      {
        "name": "participateContest",
        "discriminator": [
          239,
          67,
          15,
          52,
          177,
          142,
          214,
          43
        ],
        "accounts": [
          {
            "name": "payer",
            "writable": true,
            "signer": true
          },
          {
            "name": "participantAccount",
            "writable": true,
            "pda": {
              "seeds": [
                {
                  "kind": "const",
                  "value": [
                    98,
                    105,
                    100
                  ]
                },
                {
                  "kind": "account",
                  "path": "payer"
                },
                {
                  "kind": "account",
                  "path": "contestAccount"
                }
              ]
            }
          },
          {
            "name": "contestAccount",
            "writable": true
          },
          {
            "name": "contestVault",
            "writable": true
          },
          {
            "name": "systemProgram",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "bidOption",
            "type": {
              "defined": {
                "name": "optionType"
              }
            }
          }
        ]
      },
      {
        "name": "resolveContest",
        "discriminator": [
          250,
          181,
          233,
          153,
          74,
          161,
          231,
          115
        ],
        "accounts": [
          {
            "name": "payer",
            "writable": true,
            "signer": true
          },
          {
            "name": "contest",
            "writable": true
          }
        ],
        "args": [
          {
            "name": "answer",
            "type": {
              "defined": {
                "name": "optionType"
              }
            }
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "createContestState",
        "discriminator": [
          8,
          18,
          201,
          219,
          255,
          47,
          130,
          9
        ]
      },
      {
        "name": "participantState",
        "discriminator": [
          94,
          173,
          138,
          206,
          211,
          209,
          252,
          75
        ]
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "contestClosed",
        "msg": "Contest closed"
      },
      {
        "code": 6001,
        "name": "insufficiantBidAmount",
        "msg": "Insufficient bid amount, amount should be greater than or equal to Bid amount"
      },
      {
        "code": 6002,
        "name": "contestNotEnded",
        "msg": "The contest has not yet ended."
      },
      {
        "code": 6003,
        "name": "onlyCreatorCanCallThis",
        "msg": "Only creator can call this instruction"
      },
      {
        "code": 6004,
        "name": "alreadyResolved",
        "msg": "Already resolved"
      },
      {
        "code": 6005,
        "name": "contestNotResolvedYet",
        "msg": "Contest not resolved yet"
      },
      {
        "code": 6006,
        "name": "alreadyClaimed",
        "msg": "Already Claimed"
      },
      {
        "code": 6007,
        "name": "winnerCountShouldBeGreaterThanZero",
        "msg": "Winner count should be greater than 0"
      }
    ],
    "types": [
      {
        "name": "contestStatus",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "open"
            },
            {
              "name": "closed"
            },
            {
              "name": "resolved"
            }
          ]
        }
      },
      {
        "name": "createContestState",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "creator",
              "type": "pubkey"
            },
            {
              "name": "title",
              "type": "string"
            },
            {
              "name": "startTime",
              "type": "i64"
            },
            {
              "name": "endTime",
              "type": "i64"
            },
            {
              "name": "yesEntryPrice",
              "type": "u64"
            },
            {
              "name": "noEntryPrice",
              "type": "u64"
            },
            {
              "name": "optionYesPool",
              "type": "u64"
            },
            {
              "name": "optionNoPool",
              "type": "u64"
            },
            {
              "name": "totalPool",
              "type": "u64"
            },
            {
              "name": "yesParticipants",
              "type": "u64"
            },
            {
              "name": "noParticipants",
              "type": "u64"
            },
            {
              "name": "correctAnswer",
              "type": {
                "defined": {
                  "name": "optionType"
                }
              }
            },
            {
              "name": "status",
              "type": {
                "defined": {
                  "name": "contestStatus"
                }
              }
            },
            {
              "name": "winnerCount",
              "type": "u64"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      },
      {
        "name": "optionType",
        "type": {
          "kind": "enum",
          "variants": [
            {
              "name": "yes"
            },
            {
              "name": "no"
            }
          ]
        }
      },
      {
        "name": "participantState",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "participant",
              "type": "pubkey"
            },
            {
              "name": "contest",
              "type": "pubkey"
            },
            {
              "name": "option",
              "type": {
                "defined": {
                  "name": "optionType"
                }
              }
            },
            {
              "name": "amount",
              "type": "u64"
            },
            {
              "name": "priceAtBid",
              "type": "u64"
            },
            {
              "name": "isWinner",
              "type": "bool"
            },
            {
              "name": "hasClaimed",
              "type": "bool"
            },
            {
              "name": "bump",
              "type": "u8"
            }
          ]
        }
      }
    ]
  };
  