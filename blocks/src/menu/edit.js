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
import { SketchPicker } from "react-color";
import {
	useBlockProps,
	InspectorControls,
	FontSizePicker,
} from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";
import {
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
} from "@wordpress/block-editor";
import { PanelBody, Button, SelectControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { useSelect, select } from "@wordpress/data";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const themeColors = select("core/block-editor").getSettings().colors
		? select("core/block-editor").getSettings().colors
		: [];
	const colorPalette =
		themeColors.length > 0
			? themeColors.map((item) => item.color)
			: ["#F7F7F7"];
	const fontWeightOptions = [
		{ label: "Light", value: "300" },
		{ label: "Regular", value: "400" },
		{ label: "Bold", value: "700" },
	];
	let [imgURL, setImgURL] = useState(null);
	const image = useSelect((select) => {
		return attributes.imgID ? select("core").getMedia(attributes.imgID) : null;
	});
	useEffect(() => {
		if (attributes.imgID != 0 && image) {
			setImgURL(image.source_url);
		}
	}, [image]);

	return (
		<div {...useBlockProps()}>
			<ServerSideRender block="elegant/menu" attributes={attributes} />
			<InspectorControls>
				<PanelBody title={__("Icon", metadata.textdomain)} initialOpen={false}>
					{attributes.imgID !== 0 && imgURL && (
						<img
							src={imgURL}
							style={{
								display: "block",
								width: "50px",
								height: "50px",
								marginBottom: "5px",
							}}
						/>
					)}
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={["image"]}
							multiple={false}
							value={attributes.imgID}
							onSelect={(media) => {
								setAttributes({
									imgID: media.id,
								});
							}}
							render={({ open }) => (
								<Button onClick={open} isPrimary>
									{__("Open Media Library", metadata.textdomain)}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody
					title={__("Background color", metadata.textdomain)}
					initialOpen={false}
				>
					<PanelColorSettings
						colorSettings={[
							{
								value: attributes.bgColor,
								onChange: (colorValue) =>
									setAttributes({ bgColor: colorValue }),
								label: __("Color", metadata.textdomain),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					title={__("Link font size", metadata.textdomain)}
					initialOpen={false}
				>
					<FontSizePicker
						__next40pxDefaultSize
						value={attributes.linkFontSize}
						onChange={(newFontSize) => {
							setAttributes({ linkFontSize: newFontSize });
						}}
					/>
				</PanelBody>
				{!image && (
					<PanelBody
						title={__("Site title color", metadata.textdomain)}
						initialOpen={false}
					>
						<PanelColorSettings
							colorSettings={[
								{
									value: attributes.siteTitleColor,
									onChange: (colorValue) =>
										setAttributes({ siteTitleColor: colorValue }),
									label: __("Normal color"),
								},
								{
									value: attributes.siteTitleHoverColor,
									onChange: (colorValue) =>
										setAttributes({ siteTitleHoverColor: colorValue }),
									label: __("Hover color"),
								},
							]}
						/>
					</PanelBody>
				)}
				<PanelBody
					title={__("Link color", metadata.textdomain)}
					initialOpen={false}
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
								value: attributes.linkHoverColor,
								onChange: (colorValue) =>
									setAttributes({ linkHoverColor: colorValue }),
								label: __("Hover color"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					title={__("Link active color", metadata.textdomain)}
					initialOpen={false}
				>
					<PanelColorSettings
						colorSettings={[
							{
								value: attributes.linkActiveColor,
								onChange: (colorValue) =>
									setAttributes({ linkActiveColor: colorValue }),
								label: __("Color", metadata.textdomain),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					title={__("Link text weight", metadata.textdomain)}
					initialOpen={false}
				>
					<SelectControl
						label={__("Font Weight", metadata.textdomain)}
						value={attributes.fontWeight}
						options={fontWeightOptions}
						onChange={(value) => {
							setAttributes({ fontWeight: value });
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
