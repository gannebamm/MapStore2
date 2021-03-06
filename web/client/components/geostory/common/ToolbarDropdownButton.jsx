
/*
 * Copyright 2019, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { DropdownButton as DropdownButtonRB, Glyphicon, MenuItem } from 'react-bootstrap';
import tooltip from '../../misc/enhancers/buttonTooltip';
import find from 'lodash/find';

const DropdownButton = tooltip(DropdownButtonRB);

/**
 * Dropdown button for Toolbar component
 */
export default function ToolbarDropdownButton({
    value,
    options = [],
    onSelect = () => {},
    glyph = '',
    tooltipId,
    pullRight = false,
    className = 'square-button-md no-border',
    disabled,
    noTooltipWhenDisabled = false
}) {
    const glyphOption = (find(options, (option) => option.value === value) || { }).glyph;
    return (
        <DropdownButton
            noCaret
            noTooltipWhenDisabled={noTooltipWhenDisabled}
            tooltipId={tooltipId}
            pullRight={pullRight}
            className={className}
            disabled={disabled}
            title={<Glyphicon glyph={glyphOption || glyph}/>}>
            {options.map((option = {}) => (
                <MenuItem
                    key={option.value}
                    active={value && value === option.value}
                    onClick={() => onSelect(option.value)}>
                    {option.label}
                </MenuItem>
            ))}
        </DropdownButton>
    );
}
