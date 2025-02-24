import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import {rehypeShiki} from '@astrojs/markdown-remark'
import rehypeMermaid from 'rehype-mermaid'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://thejonsey.com',
    railingSlash: "never",
    output: 'static',
    integrations: [mdx(), sitemap(), tailwind()],
    markdown: {
        rehypePlugins: [
            [rehypeMermaid, {
                strategy: 'img-svg',
                dark: true,
            }],
            [rehypeShiki, {
                theme: {
                    name: "Code::Blocks",
                    "colors": {
                        "editor.foreground": "#d1d1d1",
                        "editorBracketHighlight.foreground1": "#ff0000",
                        "editorBracketHighlight.foreground2": "#ff0000",
                        "editorBracketHighlight.foreground3": "#ff0000",
                        "editorBracketHighlight.foreground4": "#ff0000",
                        "editorBracketHighlight.foreground5": "#ff0000",
                        "editorBracketHighlight.foreground6": "#ff0000",
                        "editorGutter.background": "#fafafa",
                        "editorGutter.addedBackground": "#ffe604",
                        "editorGutter.modifiedBackground": "#ffe604",
                        "activityBar.background": "#e6e6e6",
                        "activityBar.activeBackground": "#FFFFFF",
                        "activityBar.foreground": "#000000",
                        "activityBar.inactiveForeground": "#00000066",
                        "input.background": "#eeeeee",
                        "list.hoverBackground": "#00000000",
                        "sideBar.background": "#f0f0f0",
                        "sideBar.border": "#abadb3",
                        "statusBar.background": "#f0f0f0",
                        "statusBar.noFolderBackground": "#f0f0f0",
                        "statusBar.debuggingBackground": "#f0f0f0",
                        "statusBar.border": "#abadb3",
                        "statusBar.foreground": "#000000",
                        "terminal.background": "#ffffff",
                        "panel.background": "#f0f0f0",
                        "titleBar.activeBackground": "#ffffff",
                    },
                    "tokenColors": [
                        {
                            "name": "Comments",
                            "scope": [
                                "comment",
                                "comment.block"
                            ],
                            "settings": {
                                "foreground": "#566e67"
                            }
                        },
                        {
                            "name": "Comments: Documentation",
                            "scope": [
                                "comment.block.documentation"
                            ],
                            "settings": {
                                "fontStyle": "bold",
                                "foreground": "#808080"
                            }
                        },
                        {
                            "name": "Comments Javadoc: @param",
                            "scope": [
                                "keyword.other.documentation.javadoc"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#7c9e94"
                            }
                        },
                        {
                            "name": "Java: Multiline Comments",
                            "scope": [
                                "comment.block.java"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#808080"
                            }
                        },
                        {
                            "name": "Operators",
                            "scope": [
                                "keyword.operator",
                                "storage.modifier.pointer",
                                "entity.name.function.operator",
                                "storage.modifier.array"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#FF0000"
                            }
                        },
                        {
                            "name": "Keywords",
                            "scope": [
                                "keyword",
                                "keyword.operator.delete",
                                "storage"
                            ],
                            "settings": {
                                "fontStyle": "bold",
                                "foreground": "#47abf0"
                            }
                        },
                        {
                            "name": "C++: Header",
                            "scope": [
                                "string.quoted.other",
                                "keyword.control.directive",
                                "punctuation.definition.directive",
                                "entity.name.function.preprocessor",
                                "meta.preprocessor",
                                "string.quoted.double.include"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#00A000"
                            }
                        },
                        {
                            "name": "Java: Header",
                            "scope": [
                                "storage.modifier.import"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#D1D1D1"
                            }
                        },
                        {
                            "name": "Data Types: Java",
                            "scope": [
                                "storage.type.java"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#D1D1D1"
                            }
                        },
                        {
                            "name": "NameSpaces, Scope Resolutions",
                            "scope": [
                                "entity.name.namespace",
                                "entity.name.scope-resolution"
                            ],
                            "settings": {
                                "fontStyle": "bold",
                                "foreground": "#00A000"
                            }
                        },
                        {
                            "name": "Language Constants",
                            "scope": [
                                "constant.language",
                                "support.constant",
                                "variable.language"
                            ],
                            "settings": {
                                "fontStyle": "bold",
                                "foreground": "#47ABF0"
                            }
                        },
                        {
                            "name": "Functions",
                            "scope": [
                                "entity.name.function",
                                "entity.name.scope-resolution.function",
                                "support.function"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#D1D1D1"
                            }
                        },
                        {
                            "name": "Numbers",
                            "scope": [
                                "constant.numeric"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#F34AFF"
                            }
                        },
                        {
                            "name": "Characters",
                            "scope": [
                                "string.quoted.single.cpp"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#E0A000"
                            }
                        },
                        {
                            "name": "Strings",
                            "scope": [
                                "string.quoted.single",
                                "string.quoted.double",
                                "string.quoted.triple",
                                "string.interpolated"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#4D63EB"
                            }
                        },
                        {
                            "name": "Punctuation",
                            "scope": [
                                "punctuation.section",
                                "punctuation.separator",
                                "punctuation.terminator",
                                "punctuation.definition.begin",
                                "punctuation.definition.end",
                                "punctuation.definition.dictionary",
                                "punctuation.definition.array",
                                "punctuation.definition.parameters",
                                "punctuation.bracket"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#FF0000"
                            }
                        },
                        {
                            "name": "Java: Default Color",
                            "scope": [
                                "storage.type.generic.java"
                            ],
                            "settings": {
                                "fontStyle": "",
                                "foreground": "#D1D1D1"
                            }
                        },
                        {
                            "name": "XML: Tags",
                            "scope": [
                                "entity.name.tag"
                            ],
                            "settings": {
                                "fontStyle": "bold",
                                "foreground": "#800080"
                            }
                        },
                        {
                            "name": "XML: Tags Punctuation",
                            "scope": [
                                "punctuation.definition.tag"
                            ],
                            "settings": {
                                "fontStyle": "bold",
                                "foreground": "#800080"
                            }
                        },
                        {
                            "name": "XML: variable (left of =)",
                            "scope": [
                                "entity.other.attribute-name.localname",
                                "entity.other.attribute-name.namespace",
                                "punctuation.separator.namespace"
                            ],
                            "settings": {
                                "fontStyle": "bold",
                                "foreground": "#000000"
                            }
                        }
                    ]
                }
            }],
        ],
        syntaxHighlight: false
    }
});
