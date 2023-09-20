// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nCYdrPreWy1Y9vibrND8zs
// Component: w9vIqx3Fm5xU

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PageLayout from "../../PageLayout"; // plasmic-import: oBF7spngyz80/component
import { StrapiCollection } from "@plasmicpkgs/plasmic-strapi"; // plasmic-import: 3PiAu_DqaPA/codeComponent
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent
import { StrapiField } from "@plasmicpkgs/plasmic-strapi"; // plasmic-import: Yal_C-reFIU/codeComponent
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: s_X35kxNyfle/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_poc_project.module.css"; // plasmic-import: nCYdrPreWy1Y9vibrND8zs/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: w9vIqx3Fm5xU/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  pageLayout?: p.Flex<typeof PageLayout>;
  button?: p.Flex<typeof AntdButton>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  strapiField?: p.Flex<typeof StrapiField>;
};

export interface DefaultHomepageProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    articles: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "9HWgw8nABkTH85QqLgP6qW",
            opId: "1487f252-ac22-4fb6-9273-1ac2f62d612a",
            userArgs: {},
            cacheKey: "plasmic.$..$..$.1487f252-ac22-4fb6-9273-1ac2f62d612a.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <StrapiCollection
                  className={classNames(
                    "__wab_instance",
                    sty.strapiCollection___690Ik
                  )}
                  name={"Articles"}
                  noAutoRepeat={false}
                  noLayout={false}
                >
                  <ph.DataCtxReader>
                    {$ctx => (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__wlGv7
                        )}
                      >
                        <AntdButton
                          data-plasmic-name={"button"}
                          data-plasmic-override={overrides.button}
                          className={classNames("__wab_instance", sty.button)}
                          disabled={false}
                          href={(() => {
                            try {
                              return (
                                "/articles/" + $ctx.currentStrapiArticlesItem.id
                              );
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return `/articles/${""}`;
                              }
                              throw e;
                            }
                          })()}
                          onClick={async () => {
                            const $steps = {};
                            $steps["updateStateVariable"] = true
                              ? (() => {
                                  const actionArgs = {};
                                  return (({
                                    variable,
                                    value,
                                    startIndex,
                                    deleteCount
                                  }) => {
                                    if (!variable) {
                                      return;
                                    }
                                    const { objRoot, variablePath } = variable;
                                    undefined;
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              typeof $steps["updateStateVariable"] ===
                                "object" &&
                              typeof $steps["updateStateVariable"].then ===
                                "function"
                            ) {
                              $steps["updateStateVariable"] = await $steps[
                                "updateStateVariable"
                              ];
                            }
                          }}
                          shape={"round"}
                          size={"small"}
                          target={true}
                          type={"primary"}
                        >
                          <p.PlasmicLink
                            data-plasmic-name={"link"}
                            data-plasmic-override={overrides.link}
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              projectcss.__wab_text,
                              sty.link
                            )}
                            component={Link}
                            platform={"nextjs"}
                          >
                            {"Read more ..."}
                          </p.PlasmicLink>
                        </AntdButton>
                        <StrapiCollection
                          className={classNames(
                            "__wab_instance",
                            sty.strapiCollection__olTbc
                          )}
                          name={"Articles"}
                          noAutoRepeat={false}
                          noLayout={false}
                        >
                          <ph.DataCtxReader>
                            {$ctx => (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox___9Is0H
                                )}
                              >
                                <StrapiField
                                  data-plasmic-name={"strapiField"}
                                  data-plasmic-override={overrides.strapiField}
                                  className={classNames(
                                    "__wab_instance",
                                    sty.strapiField
                                  )}
                                  path={(() => {
                                    try {
                                      return undefined;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}
                                />
                              </div>
                            )}
                          </ph.DataCtxReader>
                        </StrapiCollection>
                      </div>
                    )}
                  </ph.DataCtxReader>
                </StrapiCollection>
              )}
            </ph.DataCtxReader>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "button", "link", "strapiField"],
  pageLayout: ["pageLayout", "button", "link", "strapiField"],
  button: ["button", "link"],
  link: ["link"],
  strapiField: ["strapiField"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  button: typeof AntdButton;
  link: "a";
  strapiField: typeof StrapiField;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    button: makeNodeComponent("button"),
    link: makeNodeComponent("link"),
    strapiField: makeNodeComponent("strapiField"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
