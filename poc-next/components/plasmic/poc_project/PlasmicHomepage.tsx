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
import { StrapiField } from "@plasmicpkgs/plasmic-strapi"; // plasmic-import: Yal_C-reFIU/codeComponent
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: s_X35kxNyfle/codeComponent

import { useScreenVariants as useScreenVariantssObdsQxKf1 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: S__obdsQxKf1/globalVariant

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
  readMore?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
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
            sourceId: "sosDk4t4x1NgBAyUouvgxT",
            opId: "f39ed9b1-de15-461d-9f66-ef7b114dd680",
            userArgs: {},
            cacheKey: "plasmic.$..$..$.f39ed9b1-de15-461d-9f66-ef7b114dd680.$.",
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
    ),
    aiTools: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "sosDk4t4x1NgBAyUouvgxT",
            opId: "27264a48-27de-4f07-907d-9cc776a47df4",
            userArgs: {},
            cacheKey: "plasmic.$..$..$.27264a48-27de-4f07-907d-9cc776a47df4.$.",
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssObdsQxKf1()
  });

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
                <div className={classNames(projectcss.all, sty.freeBox__y2EnX)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__cXOmP)}
                  >
                    <StrapiCollection
                      className={classNames(
                        "__wab_instance",
                        sty.strapiCollection__hw7Dp
                      )}
                      filterField={"Featured"}
                      filterParameter={"$eq"}
                      filterValue={"1"}
                      limit={1}
                      name={"Articles"}
                      noAutoRepeat={false}
                      noLayout={false}
                    >
                      <ph.DataCtxReader>
                        {$ctx => (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__zVgfg
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__eRzuz
                              )}
                            >
                              <StrapiField
                                className={classNames(
                                  "__wab_instance",
                                  sty.strapiField__nd7IP
                                )}
                                path={"Title"}
                              />

                              <AntdButton
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__gkSqz
                                )}
                                href={(() => {
                                  try {
                                    return (
                                      "/articles/" +
                                      $ctx.currentStrapiArticlesItem.attributes
                                        .slug
                                    );
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
                                size={"medium"}
                                type={"primary"}
                              >
                                <div
                                  data-plasmic-name={"readMore"}
                                  data-plasmic-override={overrides.readMore}
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.readMore
                                  )}
                                >
                                  {"READ MORE ..."}
                                </div>
                              </AntdButton>
                            </div>
                            <StrapiField
                              className={classNames(
                                "__wab_instance",
                                sty.strapiField__gApJd
                              )}
                              path={"Cover"}
                            />
                          </div>
                        )}
                      </ph.DataCtxReader>
                    </StrapiCollection>
                    <StrapiCollection
                      className={classNames(
                        "__wab_instance",
                        sty.strapiCollection___690Ik
                      )}
                      filterField={"Featured"}
                      filterParameter={"$eq"}
                      filterValue={"0"}
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
                            <StrapiField
                              className={classNames(
                                "__wab_instance",
                                sty.strapiField__wr6T
                              )}
                              path={"Title"}
                            />

                            <StrapiField
                              className={classNames(
                                "__wab_instance",
                                sty.strapiField___4Qitj
                              )}
                              path={"Cover"}
                            />

                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link__yBjTd
                              )}
                              component={Link}
                              platform={"nextjs"}
                            >
                              <AntdButton
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__aepQv
                                )}
                                disabled={false}
                                href={(() => {
                                  try {
                                    return (
                                      "/articles/" +
                                      $ctx.currentStrapiArticlesItem.attributes
                                        .slug
                                    );
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
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
                                          const { objRoot, variablePath } =
                                            variable;
                                          undefined;
                                        })?.apply(null, [actionArgs]);
                                      })()
                                    : undefined;
                                  if (
                                    typeof $steps["updateStateVariable"] ===
                                      "object" &&
                                    typeof $steps["updateStateVariable"]
                                      .then === "function"
                                  ) {
                                    $steps["updateStateVariable"] =
                                      await $steps["updateStateVariable"];
                                  }
                                }}
                                shape={"default"}
                                size={"medium"}
                                target={true}
                                type={"primary"}
                              >
                                <p.PlasmicLink
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.a,
                                    projectcss.__wab_text,
                                    sty.link__nawyR
                                  )}
                                  component={Link}
                                  platform={"nextjs"}
                                >
                                  <React.Fragment>
                                    <span
                                      className={
                                        "plasmic_default__all plasmic_default__span"
                                      }
                                      style={{ color: "#FFFFFF" }}
                                    >
                                      {"Read more ..."}
                                    </span>
                                  </React.Fragment>
                                </p.PlasmicLink>
                              </AntdButton>
                            </p.PlasmicLink>
                          </div>
                        )}
                      </ph.DataCtxReader>
                    </StrapiCollection>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__iojY)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"Latest AI Tools"}
                    </h1>
                  </div>
                </div>
              )}
            </ph.DataCtxReader>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "readMore", "h1"],
  pageLayout: ["pageLayout", "readMore", "h1"],
  readMore: ["readMore"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  readMore: "div";
  h1: "h1";
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
    readMore: makeNodeComponent("readMore"),
    h1: makeNodeComponent("h1"),

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
