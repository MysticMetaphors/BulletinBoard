import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6'
import Highlight from 'https://esm.sh/@tiptap/extension-highlight@2.6.6'
import Underline from 'https://esm.sh/@tiptap/extension-underline@2.6.6'
import Link from 'https://esm.sh/@tiptap/extension-link@2.6.6'
import TextAlign from 'https://esm.sh/@tiptap/extension-text-align@2.6.6'
import Image from 'https://esm.sh/@tiptap/extension-image@2.6.6'
import YouTube from 'https://esm.sh/@tiptap/extension-youtube@2.6.6'
import TextStyle from 'https://esm.sh/@tiptap/extension-text-style@2.6.6'
import FontFamily from 'https://esm.sh/@tiptap/extension-font-family@2.6.6'
import { Color } from 'https://esm.sh/@tiptap/extension-color@2.6.6'
import Bold from 'https://esm.sh/@tiptap/extension-bold@2.6.6'
import Blockquote from 'https://esm.sh/@tiptap/extension-blockquote@2.6.6'
import { useEffect, useMemo } from 'react'

export default function RichTextViewer({ contents, title = 'No title', addons = '' }) {

    const GreenBlockquote = Blockquote.extend({
        addAttributes() {
            return {
                ...this.parent?.(),
                class: {
                    default: 'fill-primary-green pl-4',
                },
            }
        },
    });

    const FontSizeTextStyle = TextStyle.extend({
        addAttributes() {
            return {
                fontSize: {
                    default: null,
                    parseHTML: element => element.style.fontSize,
                    renderHTML: attributes => {
                        if (!attributes.fontSize) {
                            return {};
                        }
                        return { style: 'font-size: ' + attributes.fontSize };
                    },
                },
            };
        },
    });

    const CustomBold = Bold.extend({
        renderHTML({ mark, HTMLAttributes }) {
            const { style, ...rest } = HTMLAttributes;
            const newStyle = 'font-weight: bold;' + (style ? ' ' + style : '');

            return ['span', { ...rest, style: newStyle.trim() }, 0];
        },
        addOptions() {
            return {
                ...this.parent?.(),
                HTMLAttributes: {},
            };
        },
    });

    const extensions = useMemo(() => [
        StarterKit.configure({
            textStyle: false,
            bold: false,
            marks: {
                bold: false,
            },
            blockquote: false,
        }),
        GreenBlockquote,
        CustomBold,
        Color,
        FontSizeTextStyle,
        FontFamily,
        Highlight,
        Underline,
        Link.configure({
            openOnClick: false,
            autolink: true,
            defaultProtocol: 'https',
        }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        Image,
        YouTube,
    ], []);

    useEffect(() => {
        const editor = new Editor({
            editable: false,
            element: document.querySelector('#wysiwyg-display'),
            extensions: extensions,
            content: `
                <blockquote class="fill-primary-green pl-4">
                    <p><span>${title}</span></p>
                </blockquote>
                ${addons}
                ${contents}
            `,
            editorProps: {
                attributes: {
                    class: 'prose max-w-none text-black',
                },
            },
        });

        return () => editor.destroy();
    }, [title, addons, contents]);


    return (
        <>
            <div className="prose sm:prose-base md:prose-lg lg:prose-xl">
                <div id='wysiwyg-display' >

                </div>
            </div>
        </>
    )
}


