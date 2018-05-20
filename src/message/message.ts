import * as Types from '../model/types';

export enum PreviewMessageType {
	ContentRequest = 'content-request',
	ContentResponse = 'content-response',
	ElementChange = 'element-change',
	Reload = 'reload',
	SketchExportRequest = 'sketch-export-request',
	SketchExportResponse = 'sketch-export-response',
	State = 'state',
	Update = 'update'
}

export enum ServerMessageType {
	AppLoaded = 'app-loaded',
	AssetReadRequest = 'asset-read-request',
	AssetReadResponse = 'asset-read-response',
	BundleChange = 'bundle-change',
	ConnectPatternLibraryRequest = 'connect-pattern-library-request',
	ConnectPatternLibraryResponse = 'connect-pattern-library-response',
	ContentRequest = 'content-request',
	ContentResponse = 'content-response',
	Copy = 'copy',
	CopyPageElement = 'copy-page-element',
	CreateNewFileRequest = 'create-new-file-request',
	CreateNewFileResponse = 'create-new-file-response',
	CreateNewPage = 'create-new-page',
	CreateScriptBundleRequest = 'create-script-bundle-request',
	CreateScriptBundleResponse = 'create-script-bundle-response',
	Cut = 'cut',
	CutPageElement = 'cut-page-element',
	Delete = 'delete',
	DeletePageElement = 'delete-page-element',
	Duplicate = 'duplicate',
	DuplicatePageElement = 'duplicate-page-element',
	ElementChange = 'element-change',
	ExportHTML = 'export-html',
	ExportPDF = 'export-pdf',
	ExportPNG = 'export-png',
	ExportSketch = 'export-sketch',
	OpenFileRequest = 'open-file-request',
	OpenFileResponse = 'open-file-response',
	PageChange = 'page-change',
	ProjectChange = 'project-change',
	Paste = 'paste',
	PastePageElementBelow = 'paste-page-element-below',
	PastePageElementInside = 'paste-page-element-inside',
	Redo = 'redo',
	Save = 'save',
	SketchExportRequest = 'sketch-export-request',
	SketchExportResponse = 'sketch-export-response',
	StartApp = 'start-app',
	PatternLibraryChange = 'pattern-library-change',
	Undo = 'undo'
}

export interface Envelope<V, T> {
	id: string;
	payload: T;
	type: V;
}

export type EmptyEnvelope<V> = Envelope<V, undefined>;

export type ServerMessage =
	| AppLoaded
	| AssetReadRequest
	| AssetReadResponse
	| ConnectPatternLibraryRequest
	| ConnectPatternLibraryResponse
	| ContentRequest
	| ContentResponse
	| CopyPageElement
	| CreateNewPage
	| CreateScriptBundleRequest
	| CreateScriptBundleResponse
	| ElementChange
	| NewFileRequest
	| NewFileResponse
	| Copy
	| Cut
	| CutPageElement
	| Delete
	| DeletePageElement
	| Duplicate
	| DuplicatePageElement
	| ExportHTML
	| ExportPDF
	| ExportPNG
	| ExportSketch
	| OpenFileRequest
	| OpenFileResponse
	| PageChange
	| ProjectChange
	| Paste
	| PastePageElementBelow
	| PastePageElementInside
	| Redo
	| Save
	| SketchExportRequest
	| SketchExportResponse
	| StartAppMessage
	| StyleGuideChange
	| Undo;

export type AppLoaded = EmptyEnvelope<ServerMessageType.AppLoaded>;
export type AssetReadRequest = EmptyEnvelope<ServerMessageType.AssetReadRequest>;
export type AssetReadResponse = Envelope<ServerMessageType.AssetReadResponse, string>;
export type ConnectPatternLibraryRequest = EmptyEnvelope<
	ServerMessageType.ConnectPatternLibraryRequest
>;
export type ConnectPatternLibraryResponse = Envelope<
	ServerMessageType.ConnectPatternLibraryResponse,
	Types.ImportPayload
>;
export type ContentRequest = EmptyEnvelope<ServerMessageType.ContentRequest>;
export type ContentResponse = Envelope<ServerMessageType.ContentResponse, string>;
export type Copy = EmptyEnvelope<ServerMessageType.Copy>;
export type CopyPageElement = Envelope<ServerMessageType.CopyPageElement, string>;
export type CreateNewPage = Envelope<ServerMessageType.CreateNewPage, undefined>;
export type CreateScriptBundleRequest = Envelope<
	ServerMessageType.CreateScriptBundleRequest,
	Types.SerializedProject
>;
export type CreateScriptBundleResponse = Envelope<
	ServerMessageType.CreateScriptBundleResponse,
	Types.FilePayload[]
>;
export type Cut = EmptyEnvelope<ServerMessageType.Cut>;
export type Delete = EmptyEnvelope<ServerMessageType.Delete>;
export type ElementChange = Envelope<ServerMessageType.ElementChange, string | undefined>;
export type ExportHTML = Envelope<ServerMessageType.ExportHTML, Types.ExportPayload>;
export type ExportPDF = Envelope<ServerMessageType.ExportPDF, Types.ExportPayload>;
export type ExportPNG = Envelope<ServerMessageType.ExportPNG, Types.ExportPayload>;
export type ExportSketch = Envelope<ServerMessageType.ExportSketch, Types.ExportPayload>;
export type NewFileRequest = EmptyEnvelope<ServerMessageType.CreateNewFileRequest>;
export type NewFileResponse = Envelope<ServerMessageType.CreateNewFileResponse, Types.ProjectPayload>;
export type CutPageElement = Envelope<ServerMessageType.CutPageElement, string>;
export type DeletePageElement = Envelope<ServerMessageType.DeletePageElement, string>;
export type Duplicate = EmptyEnvelope<ServerMessageType.Duplicate>;
export type DuplicatePageElement = Envelope<ServerMessageType.DuplicatePageElement, string>;
export type OpenFileRequest = EmptyEnvelope<ServerMessageType.OpenFileRequest>;
export type OpenFileResponse = Envelope<ServerMessageType.OpenFileResponse, Types.ProjectPayload>;
export type PageChange = Envelope<ServerMessageType.PageChange, Types.PageChangePaylod>;
export type ProjectChange = Envelope<ServerMessageType.ProjectChange, Types.SerializedProject>;
export type Paste = EmptyEnvelope<ServerMessageType.Paste>;
export type PastePageElementBelow = Envelope<ServerMessageType.PastePageElementBelow, string>;
export type PastePageElementInside = Envelope<ServerMessageType.PastePageElementInside, string>;
export type Redo = EmptyEnvelope<ServerMessageType.Redo>;
export type Save = Envelope<ServerMessageType.Save, Types.SavePayload>;
export type SketchExportRequest = Envelope<
	ServerMessageType.SketchExportRequest,
	Types.SketchExportPayload
>;
export type SketchExportResponse = Envelope<ServerMessageType.SketchExportResponse, string>;
export type StartAppMessage = Envelope<ServerMessageType.StartApp, string>;
export type StyleGuideChange = Envelope<
	ServerMessageType.PatternLibraryChange,
	Types.SerializedPatternLibrary
>;
export type Undo = EmptyEnvelope<ServerMessageType.Undo>;