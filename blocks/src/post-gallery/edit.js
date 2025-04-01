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
	CheckboxControl,
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
			<ServerSideRender block="elegant/post-gallery" attributes={attributes} />
			<InspectorControls>
				<PanelBody
					title={__("Content", metadata.textdomain)}
					initialOpen={false}
				>
					<NumberControl
						min={1}
						max={100}
						label={__("Post count", metadata.textdomain)}
						value={parseInt(attributes.postCount)}
						onChange={(value) => setAttributes({ postCount: parseInt(value) })}
					/>
					{attributes.orderby !== "rand" && (
						<SelectControl
							label={__("Order", metadata.textdomain)}
							value={attributes.order}
							onChange={(value) => setAttributes({ order: value })}
							options={[
								{ label: __("ASC", metadata.textdomain), value: "ASC" },
								{ label: __("DESC", metadata.textdomain), value: "DESC" },
							]}
						/>
					)}
					<SelectControl
						label={__("Orderby", metadata.textdomain)}
						value={attributes.orderby}
						onChange={(value) => setAttributes({ orderby: value })}
						options={[
							{ label: __("Date", metadata.textdomain), value: "date" },
							{ label: __("Title", metadata.textdomain), value: "title" },
							{
								label: __("Last modified", metadata.textdomain),
								value: "modified",
							},
							{
								label: __("Name", metadata.textdomain),
								value: "name",
							},
							{
								label: __("Random", metadata.textdomain),
								value: "rand",
							},
							{
								label: __("Comment count", metadata.textdomain),
								value: "comment_count",
							},
						]}
					/>
				</PanelBody>
				<PanelBody
					title={__("Settings", metadata.textdomain)}
					initialOpen={false}
				>
					<NumberControl
						min={1}
						max={100}
						label={__("Number of slides in desktop", metadata.textdomain)}
						value={parseInt(attributes.slidesInDesktop)}
						onChange={(value) =>
							setAttributes({ slidesInDesktop: parseInt(value) })
						}
					/>
					<NumberControl
						min={1}
						max={100}
						label={__("Number of slides in tab", metadata.textdomain)}
						value={parseInt(attributes.slidesInTab)}
						onChange={(value) =>
							setAttributes({ slidesInTab: parseInt(value) })
						}
					/>
					<NumberControl
						min={1}
						max={100}
						label={__("Number of slides in mobile", metadata.textdomain)}
						value={parseInt(attributes.slidesInMobile)}
						onChange={(value) =>
							setAttributes({ slidesInMobile: parseInt(value) })
						}
					/>
					<NumberControl
						min={1}
						max={100}
						label={__("Gap", metadata.textdomain)}
						value={parseInt(attributes.gap)}
						onChange={(value) => setAttributes({ gap: parseInt(value) })}
					/>
					<CheckboxControl
						label={__("Loop", metadata.textdomain)}
						checked={attributes.loop}
						onChange={(value) => setAttributes({ loop: value })}
					/>
					<CheckboxControl
						label={__("Autoplay", metadata.textdomain)}
						checked={attributes.autoplay}
						onChange={(value) => setAttributes({ autoplay: value })}
					/>
					{attributes.autoplay && (
						<NumberControl
							min={500}
							max={10000}
							step={100}
							label={__("Interval", metadata.textdomain)}
							value={parseInt(attributes.interval)}
							onChange={(value) => setAttributes({ interval: parseInt(value) })}
						/>
					)}
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
					title={__("Comments", metadata.textdomain)}
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
					title={__("Buttons", metadata.textdomain)}
					initialOpen={false}
				>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Background colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.buttonBgColor,
								onChange: (colorValue) =>
									setAttributes({ buttonBgColor: colorValue }),
								label: __("Normal"),
							},
							{
								value: attributes.buttonBgColorHover,
								onChange: (colorValue) =>
									setAttributes({ buttonBgColorHover: colorValue }),
								label: __("Hover"),
							},
						]}
					/>
					<PanelColorSettings
						enableAlpha={true}
						title={__("Arrow colors", metadata.textdomain)}
						colorSettings={[
							{
								value: attributes.arrowColor,
								onChange: (colorValue) =>
									setAttributes({ arrowColor: colorValue }),
								label: __("Normal"),
							},
							{
								value: attributes.arrowColorHover,
								onChange: (colorValue) =>
									setAttributes({ arrowColorHover: colorValue }),
								label: __("Hover"),
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
