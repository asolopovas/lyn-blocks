/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/columns.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/columns.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const columns = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M19 6H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4.1 1.5v10H10v-10h4.9zM5.5 17V8c0-.3.2-.5.5-.5h2.5v10H6c-.3 0-.5-.2-.5-.5zm14 0c0 .3-.2.5-.5.5h-2.6v-10H19c.3 0 .5.2.5.5v9z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (columns);
//# sourceMappingURL=columns.js.map

/***/ }),

/***/ "./src/lyn-columns/deprecated.js":
/*!***************************************!*\
  !*** ./src/lyn-columns/deprecated.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Given an HTML string for a deprecated columns inner block, returns the
 * column index to which the migrated inner block should be assigned. Returns
 * undefined if the inner block was not assigned to a column.
 *
 * @param {string} originalContent Deprecated Columns inner block HTML.
 *
 * @return {?number} Column to which inner block is to be assigned.
 */

function getDeprecatedLayoutColumn(originalContent) {
  let {
    doc
  } = getDeprecatedLayoutColumn;

  if (!doc) {
    doc = document.implementation.createHTMLDocument('');
    getDeprecatedLayoutColumn.doc = doc;
  }

  let columnMatch;
  doc.body.innerHTML = originalContent;

  for (const classListItem of doc.body.firstChild.classList) {
    if (columnMatch = classListItem.match(/^layout-column-(\d+)$/)) {
      return Number(columnMatch[1]) - 1;
    }
  }
}

const migrateCustomColors = attributes => {
  if (!attributes.customTextColor && !attributes.customBackgroundColor) {
    return attributes;
  }

  const style = {
    color: {}
  };

  if (attributes.customTextColor) {
    style.color.text = attributes.customTextColor;
  }

  if (attributes.customBackgroundColor) {
    style.color.background = attributes.customBackgroundColor;
  }

  return { ...(0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(attributes, ['customTextColor', 'customBackgroundColor']),
    style,
    isStackedOnMobile: true
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  attributes: {
    verticalAlignment: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    },
    customTextColor: {
      type: 'string'
    },
    textColor: {
      type: 'string'
    }
  },
  migrate: migrateCustomColors,

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      verticalAlignment,
      backgroundColor,
      customBackgroundColor,
      textColor,
      customTextColor
    } = attributes;
    const backgroundClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.getColorClassName)('background-color', backgroundColor);
    const textClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.getColorClassName)('color', textColor);
    const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'has-background': backgroundColor || customBackgroundColor,
      'has-text-color': textColor || customTextColor,
      [backgroundClass]: backgroundClass,
      [textClass]: textClass,
      [`are-vertically-aligned-${verticalAlignment}`]: verticalAlignment
    });
    const style = {
      backgroundColor: backgroundClass ? undefined : customBackgroundColor,
      color: textClass ? undefined : customTextColor
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className ? className : undefined,
      style: style
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content, null));
  }

}, {
  attributes: {
    columns: {
      type: 'number',
      default: 2
    }
  },

  isEligible(attributes, innerBlocks) {
    // Since isEligible is called on every valid instance of the
    // Columns block and a deprecation is the unlikely case due to
    // its subsequent migration, optimize for the `false` condition
    // by performing a naive, inaccurate pass at inner blocks.
    const isFastPassEligible = innerBlocks.some(innerBlock => /layout-column-\d+/.test(innerBlock.originalContent));

    if (!isFastPassEligible) {
      return false;
    } // Only if the fast pass is considered eligible is the more
    // accurate, durable, slower condition performed.


    return innerBlocks.some(innerBlock => getDeprecatedLayoutColumn(innerBlock.originalContent) !== undefined);
  },

  migrate(attributes, innerBlocks) {
    const columns = innerBlocks.reduce((accumulator, innerBlock) => {
      const {
        originalContent
      } = innerBlock;
      let columnIndex = getDeprecatedLayoutColumn(originalContent);

      if (columnIndex === undefined) {
        columnIndex = 0;
      }

      if (!accumulator[columnIndex]) {
        accumulator[columnIndex] = [];
      }

      accumulator[columnIndex].push(innerBlock);
      return accumulator;
    }, []);
    const migratedInnerBlocks = columns.map(columnBlocks => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)('core/column', {}, columnBlocks));
    return [{ ...(0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(attributes, ['columns']),
      isStackedOnMobile: true
    }, migratedInnerBlocks];
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    const {
      columns
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `has-${columns}-columns`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content, null));
  }

}, {
  attributes: {
    columns: {
      type: 'number',
      default: 2
    }
  },

  migrate(attributes, innerBlocks) {
    attributes = { ...(0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(attributes, ['columns']),
      isStackedOnMobile: true
    };
    return [attributes, innerBlocks];
  },

  save(_ref3) {
    let {
      attributes
    } = _ref3;
    const {
      verticalAlignment,
      columns
    } = attributes;
    const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(`has-${columns}-columns`, {
      [`are-vertically-aligned-${verticalAlignment}`]: verticalAlignment
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: wrapperClasses
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks.Content, null));
  }

}]);

/***/ }),

/***/ "./src/lyn-columns/edit.js":
/*!*********************************!*\
  !*** ./src/lyn-columns/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "./src/lyn-columns/utils.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
 */

const ALLOWED_BLOCKS = ['core/column'];

function ColumnsEditContainer(_ref) {
  let {
    attributes,
    setAttributes,
    updateAlignment,
    updateColumns,
    clientId
  } = _ref;
  const {
    isStackedOnMobile,
    verticalAlignment
  } = attributes;
  const {
    count
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    return {
      count: select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).getBlockCount(clientId)
    };
  }, [clientId]);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [`are-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
    [`is-not-stacked-on-mobile`]: !isStackedOnMobile
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: classes
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    orientation: 'horizontal',
    renderAppender: false
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockVerticalAlignmentToolbar, {
    onChange: updateAlignment,
    value: verticalAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Columns'),
    value: count,
    onChange: value => updateColumns(count, value),
    min: 1,
    max: Math.max(6, count)
  }), count > 6 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Notice, {
    status: "warning",
    isDismissible: false
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('This column count exceeds the recommended amount and may cause visual breakage.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Stack on mobile'),
    checked: isStackedOnMobile,
    onChange: () => setAttributes({
      isStackedOnMobile: !isStackedOnMobile
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
}

const ColumnsEditContainerWrapper = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.withDispatch)((dispatch, ownProps, registry) => ({
  /**
   * Update all child Column blocks with a new vertical alignment setting
   * based on whatever alignment is passed in. This allows change to parent
   * to overide anything set on a individual column basis.
   *
   * @param {string} verticalAlignment the vertical alignment setting
   */
  updateAlignment(verticalAlignment) {
    const {
      clientId,
      setAttributes
    } = ownProps;
    const {
      updateBlockAttributes
    } = dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      getBlockOrder
    } = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store); // Update own alignment.

    setAttributes({
      verticalAlignment
    }); // Update all child Column Blocks to match.

    const innerBlockClientIds = getBlockOrder(clientId);
    innerBlockClientIds.forEach(innerBlockClientId => {
      updateBlockAttributes(innerBlockClientId, {
        verticalAlignment
      });
    });
  },

  /**
   * Updates the column count, including necessary revisions to child Column
   * blocks to grant required or redistribute available space.
   *
   * @param {number} previousColumns Previous column count.
   * @param {number} newColumns      New column count.
   */
  updateColumns(previousColumns, newColumns) {
    const {
      clientId
    } = ownProps;
    const {
      replaceInnerBlocks
    } = dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      getBlocks
    } = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    let innerBlocks = getBlocks(clientId);
    const hasExplicitWidths = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.hasExplicitPercentColumnWidths)(innerBlocks); // Redistribute available width for existing inner blocks.

    const isAddingColumn = newColumns > previousColumns;

    if (isAddingColumn && hasExplicitWidths) {
      // If adding a new column, assign width to the new column equal to
      // as if it were `1 / columns` of the total available space.
      const newColumnWidth = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.toWidthPrecision)(100 / newColumns); // Redistribute in consideration of pending block insertion as
      // constraining the available working width.

      const widths = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getRedistributedColumnWidths)(innerBlocks, 100 - newColumnWidth);
      innerBlocks = [...(0,_utils__WEBPACK_IMPORTED_MODULE_8__.getMappedColumnWidths)(innerBlocks, widths), ...(0,lodash__WEBPACK_IMPORTED_MODULE_2__.times)(newColumns - previousColumns, () => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.createBlock)('core/column', {
          width: `${newColumnWidth}%`
        });
      })];
    } else if (isAddingColumn) {
      innerBlocks = [...innerBlocks, ...(0,lodash__WEBPACK_IMPORTED_MODULE_2__.times)(newColumns - previousColumns, () => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.createBlock)('core/column');
      })];
    } else {
      // The removed column will be the last of the inner blocks.
      innerBlocks = innerBlocks.slice(0, -(previousColumns - newColumns));

      if (hasExplicitWidths) {
        // Redistribute as if block is already removed.
        const widths = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getRedistributedColumnWidths)(innerBlocks, 100);
        innerBlocks = (0,_utils__WEBPACK_IMPORTED_MODULE_8__.getMappedColumnWidths)(innerBlocks, widths);
      }
    }

    replaceInnerBlocks(clientId, innerBlocks);
  }

}))(ColumnsEditContainer);

function Placeholder(_ref2) {
  let {
    clientId,
    name,
    setAttributes
  } = _ref2;
  const {
    blockType,
    defaultVariation,
    variations
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const {
      getBlockVariations,
      getBlockType,
      getDefaultBlockVariation
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.store);
    return {
      blockType: getBlockType(name),
      defaultVariation: getDefaultBlockVariation(name, 'block'),
      variations: getBlockVariations(name, 'block')
    };
  }, [name]);
  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalBlockVariationPicker, {
    icon: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(blockType, ['icon', 'src']),
    label: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(blockType, ['title']),
    variations: variations,
    onSelect: function () {
      let nextVariation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultVariation;

      if (nextVariation.attributes) {
        setAttributes(nextVariation.attributes);
      }

      if (nextVariation.innerBlocks) {
        replaceInnerBlocks(clientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.createBlocksFromInnerBlocksTemplate)(nextVariation.innerBlocks), true);
      }
    },
    allowSkip: true
  }));
}

const ColumnsEdit = props => {
  const {
    clientId
  } = props;
  const hasInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store).getBlocks(clientId).length > 0, [clientId]);
  const Component = hasInnerBlocks ? ColumnsEditContainerWrapper : Placeholder;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, props);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColumnsEdit);

/***/ }),

/***/ "./src/lyn-columns/save.js":
/*!*********************************!*\
  !*** ./src/lyn-columns/save.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    isStackedOnMobile,
    verticalAlignment
  } = attributes;
  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [`are-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
    [`is-not-stacked-on-mobile`]: !isStackedOnMobile
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save(blockProps);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps);
}

/***/ }),

/***/ "./src/lyn-columns/transforms.js":
/*!***************************************!*\
  !*** ./src/lyn-columns/transforms.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const MAXIMUM_SELECTED_BLOCKS = 6;
const transforms = {
  from: [{
    type: 'block',
    isMultiBlock: true,
    blocks: ['*'],
    __experimentalConvert: blocks => {
      const columnWidth = +(100 / blocks.length).toFixed(2);
      const innerBlocksTemplate = blocks.map(_ref => {
        let {
          name,
          attributes,
          innerBlocks
        } = _ref;
        return ['core/column', {
          width: `${columnWidth}%`
        }, [[name, { ...attributes
        }, innerBlocks]]];
      });
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/columns', {}, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlocksFromInnerBlocksTemplate)(innerBlocksTemplate));
    },
    isMatch: _ref2 => {
      let {
        length: selectedBlocksLength
      } = _ref2;
      return selectedBlocksLength && selectedBlocksLength <= MAXIMUM_SELECTED_BLOCKS;
    }
  }, {
    type: 'block',
    blocks: ['core/media-text'],
    priority: 1,
    transform: (attributes, innerBlocks) => {
      const {
        align,
        backgroundColor,
        textColor,
        style,
        mediaAlt: alt,
        mediaId: id,
        mediaPosition,
        mediaSizeSlug: sizeSlug,
        mediaType,
        mediaUrl: url,
        mediaWidth,
        verticalAlignment
      } = attributes;
      let media;

      if (mediaType === 'image' || !mediaType) {
        const imageAttrs = {
          id,
          alt,
          url,
          sizeSlug
        };
        const linkAttrs = {
          href: attributes.href,
          linkClass: attributes.linkClass,
          linkDestination: attributes.linkDestination,
          linkTarget: attributes.linkTarget,
          rel: attributes.rel
        };
        media = ['core/image', { ...imageAttrs,
          ...linkAttrs
        }];
      } else {
        media = ['core/video', {
          id,
          src: url
        }];
      }

      const innerBlocksTemplate = [['core/column', {
        width: `${mediaWidth}%`
      }, [media]], ['core/column', {
        width: `${100 - mediaWidth}%`
      }, innerBlocks]];

      if (mediaPosition === 'right') {
        innerBlocksTemplate.reverse();
      }

      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/columns', {
        align,
        backgroundColor,
        textColor,
        style,
        verticalAlignment
      }, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlocksFromInnerBlocksTemplate)(innerBlocksTemplate));
    }
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transforms);

/***/ }),

/***/ "./src/lyn-columns/utils.js":
/*!**********************************!*\
  !*** ./src/lyn-columns/utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getColumnWidths": () => (/* binding */ getColumnWidths),
/* harmony export */   "getEffectiveColumnWidth": () => (/* binding */ getEffectiveColumnWidth),
/* harmony export */   "getMappedColumnWidths": () => (/* binding */ getMappedColumnWidths),
/* harmony export */   "getRedistributedColumnWidths": () => (/* binding */ getRedistributedColumnWidths),
/* harmony export */   "getTotalColumnsWidth": () => (/* binding */ getTotalColumnsWidth),
/* harmony export */   "getWidthWithUnit": () => (/* binding */ getWidthWithUnit),
/* harmony export */   "getWidths": () => (/* binding */ getWidths),
/* harmony export */   "hasExplicitPercentColumnWidths": () => (/* binding */ hasExplicitPercentColumnWidths),
/* harmony export */   "isPercentageUnit": () => (/* binding */ isPercentageUnit),
/* harmony export */   "toWidthPrecision": () => (/* binding */ toWidthPrecision)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Returns a column width attribute value rounded to standard precision.
 * Returns `undefined` if the value is not a valid finite number.
 *
 * @param {?number} value Raw value.
 *
 * @return {number} Value rounded to standard precision.
 */

const toWidthPrecision = value => {
  const unitlessValue = parseFloat(value);
  return Number.isFinite(unitlessValue) ? parseFloat(unitlessValue.toFixed(2)) : undefined;
};
/**
 * Returns an effective width for a given block. An effective width is equal to
 * its attribute value if set, or a computed value assuming equal distribution.
 *
 * @param {WPBlock} block           Block object.
 * @param {number}  totalBlockCount Total number of blocks in Columns.
 *
 * @return {number} Effective column width.
 */

function getEffectiveColumnWidth(block, totalBlockCount) {
  const {
    width = 100 / totalBlockCount
  } = block.attributes;
  return toWidthPrecision(width);
}
/**
 * Returns the total width occupied by the given set of column blocks.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {number} Total width occupied by blocks.
 */

function getTotalColumnsWidth(blocks) {
  let totalBlockCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : blocks.length;
  return blocks.reduce((sum, block) => sum + getEffectiveColumnWidth(block, totalBlockCount), 0);
}
/**
 * Returns an object of `clientId` → `width` of effective column widths.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {Object<string,number>} Column widths.
 */

function getColumnWidths(blocks) {
  let totalBlockCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : blocks.length;
  return blocks.reduce((accumulator, block) => {
    const width = getEffectiveColumnWidth(block, totalBlockCount);
    return Object.assign(accumulator, {
      [block.clientId]: width
    });
  }, {});
}
/**
 * Returns an object of `clientId` → `width` of column widths as redistributed
 * proportional to their current widths, constrained or expanded to fit within
 * the given available width.
 *
 * @param {WPBlock[]} blocks          Block objects.
 * @param {number}    availableWidth  Maximum width to fit within.
 * @param {?number}   totalBlockCount Total number of blocks in Columns.
 *                                    Defaults to number of blocks passed.
 *
 * @return {Object<string,number>} Redistributed column widths.
 */

function getRedistributedColumnWidths(blocks, availableWidth) {
  let totalBlockCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : blocks.length;
  const totalWidth = getTotalColumnsWidth(blocks, totalBlockCount);
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.mapValues)(getColumnWidths(blocks, totalBlockCount), width => {
    const newWidth = availableWidth * width / totalWidth;
    return toWidthPrecision(newWidth);
  });
}
/**
 * Returns true if column blocks within the provided set are assigned with
 * explicit widths, or false otherwise.
 *
 * @param {WPBlock[]} blocks Block objects.
 *
 * @return {boolean} Whether columns have explicit widths.
 */

function hasExplicitPercentColumnWidths(blocks) {
  return blocks.every(block => {
    var _blockWidth$endsWith;

    const blockWidth = block.attributes.width;
    return Number.isFinite(blockWidth !== null && blockWidth !== void 0 && (_blockWidth$endsWith = blockWidth.endsWith) !== null && _blockWidth$endsWith !== void 0 && _blockWidth$endsWith.call(blockWidth, '%') ? parseFloat(blockWidth) : blockWidth);
  });
}
/**
 * Returns a copy of the given set of blocks with new widths assigned from the
 * provided object of redistributed column widths.
 *
 * @param {WPBlock[]}             blocks Block objects.
 * @param {Object<string,number>} widths Redistributed column widths.
 *
 * @return {WPBlock[]} blocks Mapped block objects.
 */

function getMappedColumnWidths(blocks, widths) {
  return blocks.map(block => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.merge)({}, block, {
    attributes: {
      width: `${widths[block.clientId]}%`
    }
  }));
}
/**
 * Returns an array with columns widths values, parsed or no depends on `withParsing` flag.
 *
 * @param {WPBlock[]} blocks      Block objects.
 * @param {?boolean}  withParsing Whether value has to be parsed.
 *
 * @return {Array<number,string>} Column widths.
 */

function getWidths(blocks) {
  let withParsing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return blocks.map(innerColumn => {
    const innerColumnWidth = innerColumn.attributes.width || 100 / blocks.length;
    return withParsing ? parseFloat(innerColumnWidth) : innerColumnWidth;
  });
}
/**
 * Returns a column width with unit.
 *
 * @param {string} width Column width.
 * @param {string} unit  Column width unit.
 *
 * @return {string} Column width with unit.
 */

function getWidthWithUnit(width, unit) {
  width = 0 > parseFloat(width) ? '0' : width;

  if (isPercentageUnit(unit)) {
    width = Math.min(width, 100);
  }

  return `${width}${unit}`;
}
/**
 * Returns a boolean whether passed unit is percentage
 *
 * @param {string} unit Column width unit.
 *
 * @return {boolean} 	Whether unit is '%'.
 */

function isPercentageUnit(unit) {
  return unit === '%';
}

/***/ }),

/***/ "./src/lyn-columns/variations.js":
/*!***************************************!*\
  !*** ./src/lyn-columns/variations.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */

const variations = [{
  name: 'one-column-full',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('100'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('One column'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m39.0625 14h-30.0625v20.0938h30.0625zm-30.0625-2c-1.10457 0-2 .8954-2 2v20.0938c0 1.1045.89543 2 2 2h30.0625c1.1046 0 2-.8955 2-2v-20.0938c0-1.1046-.8954-2-2-2z"
  })),
  innerBlocks: [['core/column']],
  scope: ['block']
}, {
  name: 'two-columns-equal',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('50 / 50'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Two columns; equal split'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
  })),
  isDefault: true,
  innerBlocks: [['core/column'], ['core/column']],
  scope: ['block']
}, {
  name: 'two-columns-one-third-two-thirds',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('33 / 66'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Two columns; one-third, two-thirds split'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
  })),
  innerBlocks: [['core/column', {
    width: '33.33%'
  }], ['core/column', {
    width: '66.66%'
  }]],
  scope: ['block']
}, {
  name: 'two-columns-two-thirds-one-third',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('66 / 33'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Two columns; two-thirds, one-third split'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
  })),
  innerBlocks: [['core/column', {
    width: '66.66%'
  }], ['core/column', {
    width: '33.33%'
  }]],
  scope: ['block']
}, {
  name: 'three-columns-equal',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('33 / 33 / 33'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Three columns; equal split'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })),
  innerBlocks: [['core/column'], ['core/column'], ['core/column']],
  scope: ['block']
}, {
  name: 'three-columns-wider-center',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('25 / 50 / 25'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Three columns; wide center column'),
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
    fillRule: "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z"
  })),
  innerBlocks: [['core/column', {
    width: '25%'
  }], ['core/column', {
    width: '50%'
  }], ['core/column', {
    width: '25%'
  }]],
  scope: ['block']
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variations);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/lyn-columns/block.json":
/*!************************************!*\
  !*** ./src/lyn-columns/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"lyn/columns","title":"Lyntoch Columns","category":"design","description":"Columns with Tailwind Styles","textdomain":"default","attributes":{"verticalAlignment":{"type":"string"},"isStackedOnMobile":{"type":"boolean","default":true}},"supports":{"anchor":true,"align":["wide","full"],"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"blockGap":{"__experimentalDefault":"2em"},"margin":["top","bottom"],"padding":true,"__experimentalDefaultControls":{"padding":true}},"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"allowEditing":false,"default":{"type":"flex","flexWrap":"nowrap"}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}}},"editorScript":"file:index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./src/lyn-columns/index.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => (/* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "name": () => (/* binding */ name)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/columns.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./src/lyn-columns/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/lyn-columns/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/lyn-columns/block.json");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/lyn-columns/save.js");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./variations */ "./src/lyn-columns/variations.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transforms */ "./src/lyn-columns/transforms.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_4__;

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_6__["default"],
  example: {
    viewportWidth: 600,
    // Columns collapse "@media (max-width: 599px)".
    innerBlocks: [{
      name: 'lyn/column',
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.')
        }
      }, {
        name: 'core/image',
        attributes: {
          url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg'
        }
      }, {
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Suspendisse commodo neque lacus, a dictum orci interdum et.')
        }
      }]
    }, {
      name: 'lyn/column',
      innerBlocks: [{
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Etiam et egestas lorem. Vivamus sagittis sit amet dolor quis lobortis. Integer sed fermentum arcu, id vulputate lacus. Etiam fermentum sem eu quam hendrerit.')
        }
      }, {
        name: 'core/paragraph',
        attributes: {
          /* translators: example text. */
          content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Nam risus massa, ullamcorper consectetur eros fermentum, porta aliquet ligula. Sed vel mauris nec enim.')
        }
      }]
    }]
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_7__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map