
import React, {
    useState,
    useEffect,
    useMemo
} from 'react';

import CodeMirror from '@uiw/react-codemirror';

import { dracula } from '@uiw/codemirror-theme-dracula';

import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { xml } from '@codemirror/lang-xml';

import { indentUnit } from '@codemirror/language';

import './index.css';

export const Playground = (props) => {

    const {
        code = '',
        lang = 'html',

        // Layout
        mode = 'tabs',
        defaultView = 'editor',

        // Visibility
        showCopy = true,
        showReset = true,
        showPreview = true,

        // Dimensions
        height = 350,
        editorWidth = '50%',
        previewWidth = '50%',

        // Editor
        readOnly = false,
        tabSize = 2,

        // Preview
        preview,
        renderPreview,
        previewTitle = 'Live Preview',

        // Callbacks
        onChange,
        onReset,

        title = 'Playground'
    } = props;

    const [editorCode, setEditorCode] = useState(code);
    const [activeTab, setActiveTab] = useState(defaultView);
    const [copyStatus, setCopyStatus] = useState(false);

    // Synchronize code when parent changes it
    useEffect(() => {
        setEditorCode(code);
    }, [code]);

    // Synchronize default view
    useEffect(() => {
        setActiveTab(defaultView);
    }, [defaultView]);

    // Configure language support
    const extensions = useMemo(() => {

        const language = String(lang || '').toLowerCase();

        const languageExtension = (() => {

            switch (language) {

                case 'html':
                case 'htm':
                    return html();

                case 'javascript':
                case 'js':
                case 'jsx':
                case 'typescript':
                case 'ts':
                case 'tsx':
                    return javascript({
                        jsx: true,
                        typescript: ['typescript', 'ts', 'tsx'].includes(language)
                    });

                case 'css':
                    return css();

                case 'json':
                    return json();

                case 'xml':
                    return xml();

                default:
                    return null;

            }

        })();

        return [
            indentUnit.of(' '.repeat(Math.max(1, tabSize))),
            ...(languageExtension ? [languageExtension] : [])
        ];

    }, [lang, tabSize]);

    // Update code
    const handleCodeChange = (value) => {

        setEditorCode(value);

        if (typeof onChange === 'function') {
            onChange(value);
        }

    };

    // Copy code
    const handleCopy = async () => {

        try {

            await navigator.clipboard.writeText(editorCode);

            setCopyStatus(true);

            setTimeout(() => {
                setCopyStatus(false);
            }, 2000);

        } catch (error) {

            console.error('Unable to copy code:', error);

        }

    };

    // Reset code
    const handleReset = () => {

        handleCodeChange(code);

        setCopyStatus(false);

        if (typeof onReset === 'function') {
            onReset(code);
        }

    };

    // Generate preview
    const getPreview = () => {

        // Consumer-defined preview renderer
        if (typeof renderPreview === 'function') {
            return renderPreview(editorCode);
        }

        // Consumer-provided preview
        if (preview !== undefined && preview !== null) {
            return preview;
        }

        // Default HTML preview
        if (String(lang).toLowerCase() === 'html') {

            return (
                <iframe
                    title="Live Code Preview"
                    srcDoc={editorCode}
                    sandbox="allow-scripts"
                    className="bs-playground-iframe"
                />
            );

        }

        return (
            <div className="bs-playground-no-preview">
                <div>
                    Preview renderer is not configured.
                </div>
                <small>
                    Provide renderPreview or preview to display output.
                </small>
            </div>
        );

    };

    // Render CodeMirror Editor
    const renderEditor = () => (

        <div className="bs-playground-editor-content">

            <CodeMirror
                value={editorCode}
                height="100%"
                theme={dracula}
                extensions={extensions}
                onChange={handleCodeChange}
                editable={!readOnly}
                readOnly={readOnly}
                basicSetup={{
                    lineNumbers: true,
                    foldGutter: true,
                    highlightActiveLine: true,
                    highlightActiveLineGutter: true,
                    bracketMatching: true,
                    closeBrackets: true,
                    autocompletion: true,
                    indentOnInput: true
                }}
            />

        </div>

    );

    // Render Preview
    const renderPreviewPanel = () => (

        <div className="bs-playground-preview-content">
            {getPreview()}
        </div>

    );

    return (

        <div className="bs-playground">

            {/* Header */}
            <div className="bs-playground-header">

                <div className="bs-playground-title">
                    {title}
                </div>

                <div className="bs-playground-actions">

                    {showCopy && (
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="bs-playground-btn"
                        >
                            {copyStatus ? '✓ Copied' : 'Copy'}
                        </button>
                    )}

                    {showReset && (
                        <button
                            type="button"
                            onClick={handleReset}
                            className="bs-playground-btn"
                        >
                            Reset
                        </button>
                    )}

                </div>

            </div>

            <div className={`bs-playground-${mode}`}>

                {/* Tabbed Mode */}
                {mode === 'tabs' && (

                    <div className="bs-playground-tabs">

                        {showPreview && (
                            <div className="bs-playground-tab-header">

                                <button
                                    type="button"
                                    className={
                                        activeTab === 'editor'
                                            ? 'active'
                                            : ''
                                    }
                                    onClick={() => setActiveTab('editor')}
                                >
                                    Code
                                </button>

                                <button
                                    type="button"
                                    className={
                                        activeTab === 'preview'
                                            ? 'active'
                                            : ''
                                    }
                                    onClick={() => setActiveTab('preview')}
                                >
                                    Preview
                                </button>

                            </div>
                        )}

                        <div
                            className="bs-playground-tab-body"
                            style={{ height }}
                        >

                            <div
                                className="bs-playground-pane"
                                style={{
                                    display: activeTab === 'editor'
                                        ? 'block'
                                        : 'none'
                                }}
                            >
                                {renderEditor()}
                            </div>

                            {showPreview && (
                                <div
                                    className="bs-playground-pane"
                                    style={{
                                        display: activeTab === 'preview'
                                            ? 'block'
                                            : 'none'
                                    }}
                                >
                                    {renderPreviewPanel()}
                                </div>
                            )}

                        </div>

                    </div>

                )}

                {/* Split Mode */}
                {mode === 'split' && (

                    <div
                        className="bs-playground-split"
                        style={{ height }}
                    >

                        <div
                            className="bs-playground-split-editor"
                            style={{
                                width: showPreview
                                    ? editorWidth
                                    : '100%'
                            }}
                        >

                            <div className="bs-playground-panel-header">
                                Code
                            </div>

                            {renderEditor()}

                        </div>

                        {showPreview && (
                            <div
                                className="bs-playground-split-preview"
                                style={{
                                    width: previewWidth
                                }}
                            >

                                <div className="bs-playground-panel-header">
                                    {previewTitle}
                                </div>

                                {renderPreviewPanel()}

                            </div>
                        )}

                    </div>

                )}

            </div>

        </div>

    );

};

export default Playground;
