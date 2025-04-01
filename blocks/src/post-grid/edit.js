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
import {
	useBlockProps,
	RichText,
	InspectorControls,
	PanelColorSettings,
	AlignmentToolbar,
	FontSizePicker,
} from "@wordpress/block-editor";
import {
	PanelBody,
	__experimentalDivider as Divider,
	__experimentalNumberControl as NumberControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";
import ServerSideRender from "@wordpress/server-side-render";

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
	return (
		<div {...useBlockProps()}>
			<ServerSideRender block="elegant/post-grid" attributes={attributes} />
			<InspectorControls>
				<PanelBody
					title={__("Background color", metadata.textdomain)}
					initialOpen={false}
				>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Colors", metadata.textdomain)}
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
					title={__("Category", metadata.textdomain)}
					initialOpen={false}
				>
					<FontSizePicker
						value={attributes.categoryFontSize}
						onChange={(value) => setAttributes({ categoryFontSize: value })}
					/>
					<Divider />
					<SelectControl
						label={__("Font weight", metadata.textdomain)}
						value={parseInt(attributes.categoryFontWeight)}
						onChange={(value) =>
							setAttributes({ categoryFontWeight: parseInt(value) })
						}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.categoryColor,
								onChange: (colorValue) =>
									setAttributes({ categoryColor: colorValue }),
								label: __("Normal"),
							},
							{
								value: attributes.categoryColorHover,
								onChange: (colorValue) =>
									setAttributes({ categoryColorHover: colorValue }),
								label: __("Hover"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody title={__("Title", metadata.textdomain)} initialOpen={false}>
					<FontSizePicker
						value={attributes.titleFontSize}
						onChange={(value) => setAttributes({ titleFontSize: value })}
					/>
					<Divider />
					<SelectControl
						label={__("Font weight", metadata.textdomain)}
						value={parseInt(attributes.titleFontWeight)}
						onChange={(value) =>
							setAttributes({ titleFontWeight: parseInt(value) })
						}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.titleColor,
								onChange: (colorValue) =>
									setAttributes({ titleColor: colorValue }),
								label: __("Normal"),
							},
							{
								value: attributes.titleColorHover,
								onChange: (colorValue) =>
									setAttributes({ titleColorHover: colorValue }),
								label: __("Hover"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					title={__("Author", metadata.textdomain)}
					initialOpen={false}
				>
					<FontSizePicker
						value={attributes.authorFontSize}
						onChange={(value) => setAttributes({ authorFontSize: value })}
					/>
					<Divider />
					<SelectControl
						label={__("Font weight", metadata.textdomain)}
						value={parseInt(attributes.authorFontWeight)}
						onChange={(value) =>
							setAttributes({ authorFontWeight: parseInt(value) })
						}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.authorColor,
								onChange: (colorValue) =>
									setAttributes({ authorColor: colorValue }),
								label: __("Normal"),
							},
							{
								value: attributes.authorColorHover,
								onChange: (colorValue) =>
									setAttributes({ authorColorHover: colorValue }),
								label: __("Hover"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody title={__("Time", metadata.textdomain)} initialOpen={false}>
					<FontSizePicker
						value={attributes.timeFontSize}
						onChange={(value) => setAttributes({ timeFontSize: value })}
					/>
					<Divider />
					<SelectControl
						label={__("Font weight", metadata.textdomain)}
						value={parseInt(attributes.timeFontWeight)}
						onChange={(value) =>
							setAttributes({ timeFontWeight: parseInt(value) })
						}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.timeColor,
								onChange: (colorValue) =>
									setAttributes({ timeColor: colorValue }),
								label: __("Normal"),
							},
							{
								value: attributes.timeColorHover,
								onChange: (colorValue) =>
									setAttributes({ timeColorHover: colorValue }),
								label: __("Hover"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					title={__("Comment", metadata.textdomain)}
					initialOpen={false}
				>
					<FontSizePicker
						value={attributes.commentFontSize}
						onChange={(value) => setAttributes({ commentFontSize: value })}
					/>
					<Divider />
					<SelectControl
						label={__("Font weight", metadata.textdomain)}
						value={parseInt(attributes.commentFontWeight)}
						onChange={(value) =>
							setAttributes({ commentFontWeight: parseInt(value) })
						}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.commentColor,
								onChange: (colorValue) =>
									setAttributes({ commentColor: colorValue }),
								label: __("Normal"),
							},
							{
								value: attributes.commentColorHover,
								onChange: (colorValue) =>
									setAttributes({ commentColorHover: colorValue }),
								label: __("Hover"),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					title={__("Excerpt", metadata.textdomain)}
					initialOpen={false}
				>
					<FontSizePicker
						value={attributes.excerptFontSize}
						onChange={(value) => setAttributes({ excerptFontSize: value })}
					/>
					<Divider />
					<SelectControl
						label={__("Font weight", metadata.textdomain)}
						value={parseInt(attributes.excerptFontWeight)}
						onChange={(value) =>
							setAttributes({ excerptFontWeight: parseInt(value) })
						}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.excerptColor,
								onChange: (colorValue) =>
									setAttributes({ excerptColor: colorValue }),
								label: __("color", metadata.textdomain),
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					title={__("Pagination", metadata.textdomain)}
					initialOpen={false}
				>
					<FontSizePicker
						value={attributes.paginationFontSize}
						onChange={(value) => setAttributes({ paginationFontSize: value })}
					/>
					<Divider />
					<SelectControl
						label={__("Font weight", metadata.textdomain)}
						value={parseInt(attributes.paginationFontWeight)}
						onChange={(value) =>
							setAttributes({ paginationFontWeight: parseInt(value) })
						}
						options={[
							{ label: "Light", value: "300" },
							{ label: "Regular", value: "400" },
							{ label: "Bold", value: "700" },
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.paginationColor,
								onChange: (colorValue) =>
									setAttributes({ paginationColor: colorValue }),
								label: __("Normal", metadata.textdomain),
							},
							{
								value: attributes.paginationColorActive,
								onChange: (colorValue) =>
									setAttributes({ paginationColorActive: colorValue }),
								label: __("Active", metadata.textdomain),
							},
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Background colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.paginationBgColor,
								onChange: (colorValue) =>
									setAttributes({ paginationBgColor: colorValue }),
								label: __("Normal", metadata.textdomain),
							},
							{
								value: attributes.paginationBgColorActive,
								onChange: (colorValue) =>
									setAttributes({ paginationBgColorActive: colorValue }),
								label: __("Active", metadata.textdomain),
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
