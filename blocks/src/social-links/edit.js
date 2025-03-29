/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import metadata from "./block.json";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { useBlockProps } from "@wordpress/block-editor";
import { TextControl, Flex, FlexBlock } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<Flex wrap={true} style={{ marginBottom: "10px" }}>
				<FlexBlock>
					<TextControl
						label={__("Link text", metadata.textdomain)}
						placeholder={__("Google", metadata.textdomain)}
						value={attributes.text}
						onChange={(value) => {
							setAttributes({ text: value });
						}}
					/>
				</FlexBlock>
				<FlexBlock>
					<TextControl
						type="url"
						label={__("Link", metadata.textdomain)}
						placeholder={__("https://www.google.com", metadata.textdomain)}
						value={attributes.link}
						onChange={(value) => {
							setAttributes({ link: value });
						}}
					/>
				</FlexBlock>
			</Flex>
		</div>
	);
}
