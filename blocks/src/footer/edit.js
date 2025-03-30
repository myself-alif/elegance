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
import {
	useBlockProps,
	useInnerBlocksProps,
	RichText,
	PanelColorSettings,
	InspectorControls,
	FontSizePicker,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	__experimentalDivider as Divider,
	RangeControl,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const innerBlockProps = useInnerBlocksProps(
		{
			className: "social-link-item",
		},
		{
			allowedBlocks: ["elegant/social-links"],
			template: [["elegant/social-links", {}]],
		},
	);

	return (
		<div {...blockProps}>
			<div {...innerBlockProps} />
			<RichText
				placeholder={__("Type here", metadata.textdomain)}
				value={attributes.footerText}
				onChange={(value) => setAttributes({ footerText: value })}
			/>
			<InspectorControls>
				<PanelBody
					initialOpen={false}
					title={__("Link color", metadata.textdomain)}
				>
					<PanelColorSettings
						colorSettings={[
							{
								value: attributes.linkColor,
								onChange: (colorValue) =>
									setAttributes({ linkColor: colorValue }),
								label: __("Normal color"),
							},
							{
								value: attributes.linkColorHover,
								onChange: (colorValue) =>
									setAttributes({ linkColorHover: colorValue }),
								label: __("Hover color"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__("Separator color", metadata.textdomain)}
				>
					<PanelColorSettings
						colorSettings={[
							{
								value: attributes.separatorColor,
								onChange: (colorValue) =>
									setAttributes({ separatorColor: colorValue }),
								label: __("Color"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__("Footer text color", metadata.textdomain)}
				>
					<PanelColorSettings
						colorSettings={[
							{
								value: attributes.footerTextColor,
								onChange: (colorValue) =>
									setAttributes({ footerTextColor: colorValue }),
								label: __("Color"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__("Background color", metadata.textdomain)}
				>
					<PanelColorSettings
						colorSettings={[
							{
								value: attributes.bgColor,
								onChange: (colorValue) =>
									setAttributes({ bgColor: colorValue }),
								label: __("Color"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__("Link font typography", metadata.textdomain)}
				>
					<FontSizePicker
						value={attributes.fontSize}
						onChange={(size) => {
							setAttributes({ fontSize: size });
						}}
					/>
					<Divider />
					<SelectControl
						label={__("Font Weight", metadata.textdomain)}
						value={attributes.fontWeight}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
						onChange={(value) => {
							setAttributes({ fontWeight: value });
						}}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__("Footer text typography", metadata.textdomain)}
				>
					<FontSizePicker
						value={attributes.footerFontSize}
						onChange={(size) => {
							setAttributes({ footerFontSize: size });
						}}
					/>
					<Divider />
					<SelectControl
						label={__("Font Weight", metadata.textdomain)}
						value={attributes.footerFontWeight}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
						onChange={(value) => {
							setAttributes({ footerFontWeight: value });
						}}
					/>
				</PanelBody>
				<PanelBody
					initialOpen={false}
					title={__("Spacing", metadata.textdomain)}
				>
					<RangeControl
						label={__("Gap", metadata.textdomain)}
						value={attributes.gap}
						onChange={(value) => setAttributes({ gap: value })}
						min={0}
						max={100}
					/>
					<RangeControl
						label={__("Padding", metadata.textdomain)}
						value={attributes.padding}
						onChange={(value) => setAttributes({ padding: value })}
						min={0}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>
			<h6 style={{ textAlign: "center", marginTop: "40px" }}>
				Check the frontend to view the output
			</h6>
		</div>
	);
}
