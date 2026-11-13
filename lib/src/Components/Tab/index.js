
import React, { useState } from 'react';
import { Icon } from 'e-ui-react';

export const Tab = ({ justify, menulinks, minValues, settings }) => {

    const [activeTab, setActiveTab] = useState(menulinks?.[0]?.id);

    const [displayTabs, setDisplayTabs] = useState(
        minValues !== undefined
            ? menulinks?.slice(0, minValues)
            : menulinks
    );

    const [dropdownList, setDropdownList] = useState(
        minValues !== undefined
            ? menulinks?.slice(minValues)
            : []
    );

    const [showDropdown, setShowDropdown] = useState(false);

    const onTabSelect = (l) => {
        setActiveTab(l.id);

        if (l.onClick) {
            l.onClick();
        }

        if (l.url && l.url !== '#') {
            window.location.replace(l.url);
        }
    };

    const onDropdownMenuSelect = (d) => {
        let a = [...displayTabs];
        let b = [...dropdownList];

        a.unshift(d);
        b = b.filter((c) => c.id !== d.id);
        b.unshift(a.pop());

        setDisplayTabs(a);
        setDropdownList(b);
        setActiveTab(d.id);
        setShowDropdown(false);
    };

    const tabContentCss = {
        ...(settings?.tabContent?.border && {
            border: settings.tabContent.border
        })
    };

    return (
        <>
            <ul className={
                justify
                    ? 'nav nav-tabs nav-justified'
                    : 'nav nav-tabs'
            }>
                {displayTabs?.map((l) => (
                    <li key={l.id} className="nav-item">
                        <div
                            className={
                                l.id === activeTab
                                    ? 'nav-link active'
                                    : 'nav-link'
                            }
                            style={{ cursor: 'pointer' }}
                            onClick={() => onTabSelect(l)}
                        >
                            <b>{l.label}</b>
                        </div>
                    </li>
                ))}

                {minValues !== undefined && dropdownList.length > 0 && (
                    <li className="nav-item position-relative">
                        <div className="nav-link">
                            <Icon
                                type="FontAwesome"
                                name="fa-plus-circle"
                                size="12"
                                color="primary"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setShowDropdown(!showDropdown)}
                            />

                            {showDropdown && (
                                <ul
                                    className="dropdown-menu show"
                                    style={{
                                        position: 'absolute',
                                        zIndex: 1000
                                    }}
                                >
                                    {dropdownList.map((d) => (
                                        <li key={d.id}>
                                            <div
                                                className="dropdown-item"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => onDropdownMenuSelect(d)}
                                            >
                                                {d.label}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                )}
            </ul>

            <div className="tab-content">
                {menulinks?.map((l) => (
                    <div
                        key={l.id}
                        className={
                            l.id === activeTab
                                ? 'tab-pane fade show active'
                                : 'tab-pane fade'
                        }
                        id={l.id}
                        style={tabContentCss}
                    >
                        {l.component}
                    </div>
                ))}
            </div>
        </>
    );
};
