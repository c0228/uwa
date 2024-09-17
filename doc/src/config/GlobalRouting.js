import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* React Imports ::: START */
const ReactPage  = React.lazy( ()=>import('@DocCore/react/Page.js') );
const BackendPage  = React.lazy( ()=>import('@DocCore/backend/Page.js') );

import Welcome from '@DocCore/welcome/index.js';
import { ReactContextPage } from '@DocReactAdvancedTopics/ReactContext/index.js';
import { RxJSPage } from '@DocReactAdvancedTopics/Rxjs/index.js';

import { HighlightPage } from '@DocReactCodeEditorsViewers/Highlight/index.js';
import { StackblitzPage } from '@DocReactCodeEditorsViewers/Stackblitz/index.js';
import { RichTextEditorPage } from '@DocReactCodeEditorsViewers/RichTextEditor/index.js';

import { AccordianPage } from '@DocReactComponents/Accordian/index.js';
import { AccordianListItemsPage } from '@DocReactComponents/AccordianListItems/index.js';
import { AlertPage } from '@DocReactComponents/Alert/index.js';
import { AvatarPage } from '@DocReactComponents/Avatar/index.js';
import { BadgePage } from '@DocReactComponents/Badge/index.js';
import { BreadcrumbPage } from '@DocReactComponents/Breadcrumb/index.js';
import { ButtonPage } from '@DocReactComponents/Button/index.js';
import { CalendarPage } from '@DocReactComponents/Calendar/index.js';
import { CanvasDrawerPage } from '@DocReactComponents/CanvasDrawer/index.js';
import { CardPage } from '@DocReactComponents/Card/index.js';
import { CardFlipPage } from '@DocReactComponents/CardFlip/index.js';
import { CardScrollPage } from '@DocReactComponents/CardScroll/index.js';
import { CardSliderPage } from '@DocReactComponents/CardSlider/index.js';
import { CarouselPage } from '@DocReactComponents/Carousel/index.js';
import { DataTablePage } from '@DocReactComponents/DataTable/index.js';
import { DrawerPage } from '@DocReactComponents/Drawer/index.js';
import { FlexDrawerPage } from '@DocReactComponents/FlexDrawer/index.js';
import { FloatingButtonPage } from '@DocReactComponents/FloatingButton/index.js';
import { DropdownPage } from '@DocReactComponents/Dropdown/index.js';
import { LoadingPage } from '@DocReactComponents/Loading/index.js';
import { ModalPage } from '@DocReactComponents/Modal/index.js';
import { NavPage } from '@DocReactComponents/Nav/index.js';
import { PillPage } from '@DocReactComponents/Pill/index.js';
import { ProgressBarPage } from '@DocReactComponents/ProgressBar/index.js';
import { TabPage } from '@DocReactComponents/Tab/index.js';
import { TablePage } from '@DocReactComponents/Table/index.js';
import { TablePaginationPage } from '@DocReactComponents/TablePagination/index.js';
import { TreeViewPage } from '@DocReactComponents/TreeView/index.js';
import { MenuPage } from '@DocReactComponents/Menu/index.js';
import { TagPage } from '@DocReactComponents/Tag/index.js';
import { TimelinePage } from '@DocReactComponents/Timeline/index.js';
import { ToastPage } from '@DocReactComponents/Toast/index.js';
import { HoverPage } from '@DocReactComponents/Hover/index.js';
import { IconPage } from '@DocReactComponents/Icon/index.js';
import { SpeechListenerPage } from '@DocReactFeatures/SpeechListener/index.js';

import { AutocompletePage } from '@DocReactFormElements/Autocomplete/index.js';
import { SelectPage } from '@DocReactFormElements/Select/index.js';
import { SwitchPage } from '@DocReactFormElements/Switch/index.js';
import { EmailPage } from '@DocReactFormElements/Email/index.js';
import { FileUploadPage } from '@DocReactFormElements/FileUpload/index.js';
import { PasswordPage } from '@DocReactFormElements/Password/index.js';
import { TextBoxPage } from '@DocReactFormElements/TextBox/index.js';
import { TextAreaPage } from '@DocReactFormElements/TextArea/index.js';
import { ColorPickerPage } from '@DocReactFormElements/ColorPicker/index.js';
import { ChoicePage } from '@DocReactFormElements/Choice/index.js';
import { DateTimePickerPage } from '@DocReactFormElements/DateTimePicker/index.js';
import { RangePage } from '@DocReactFormElements/Range/index.js';
import { RatingPage } from '@DocReactFormElements/Rating/index.js';

import { LeafletPage } from '@DocReactMaps/Leaflet/index.js';
import { GlobePage } from '@DocReactMaps/Globe/index.js';

import { HeadingPage } from '@DocReactHeadersAndFooters/Heading/index.js';

import { FontPage } from '@DocReactLayout/Fonts/index.js';
import { GridSystemPage } from '@DocReactLayout/GridSystem/index.js';
import { OrderPage } from '@DocReactLayout/Order/index.js';
import { SideWrapperNavabarPage } from '@DocReactLayout/SideWrapperNavbar/index.js';
import { VideoPlayerPage } from '@DocReactMedia/VideoPlayer/index.js';
import { BlinkTextPrintPage } from '@DocNodeJavascript/BlinkTextPrint/index.js';

import { ImageGalleryPage } from '@DocReactReadyMadeScreen/ImageGallery/index.js';
import { ReadyMadeDropdownsPage } from '@DocReactReadyMadeScreen/ReadyMadeDropdowns/index.js';

import { AppThemesPage } from '@DocReactThemes/AppThemes/index.js';

import { GridUtilityPage } from '@DocReactUtility/GridUtility/index.js';
import { StylesUtilityPage } from '@DocReactUtility/StylesUtility/index.js';

import { AreaChartPage } from '@DocReactVisualization/AreaChart/index.js';
import { BarChartPage } from '@DocReactVisualization/BarChart/index.js';
import { BoxChartPage } from '@DocReactVisualization/BoxChart/index.js';
import { CompositionChartPage } from '@DocReactVisualization/CompositionChart/index.js';
import { CorrelationChartPage } from '@DocReactVisualization/CorrelationChart/index.js';
import { DendogramChartPage } from '@DocReactVisualization/DendogramChart/index.js';
import { FlowChartPage } from '@DocReactVisualization/FlowChart/index.js';
import { FunnelChartPage } from '@DocReactVisualization/FunnelChart/index.js';
import { GeoMapPage } from '@DocReactVisualization/GeoMap/index.js';
import { LineChartPage } from '@DocReactVisualization/LineChart/index.js';
import { PieChartPage } from '@DocReactVisualization/PieChart/index.js';
import { SankeyChartPage } from '@DocReactVisualization/SankeyChart/index.js';
import { ScatterChartPage } from '@DocReactVisualization/ScatterChart/index.js';
import { TreeMapChartPage } from '@DocReactVisualization/TreeMapChart/index.js';
import { TwoByTwoChartPage } from '@DocReactVisualization/TwoByTwoChart/index.js';
import { VennChartPage } from '@DocReactVisualization/VennChart/index.js';
import { WaterfallChartPage } from '@DocReactVisualization/WaterfallChart/index.js';
/* React Imports ::: END */

/* Backend Imports ::: START */
import { GetStartedPage } from '@DocCore/backend/Basics/GetStarted/index.js';
import { SelfFileUploadPage } from '@DocCore/backend/CloudStorage/SelfFileUpload/index.js';
import { SelfFileManagerPage } from '@DocCore/backend/CloudStorage/SelfFileManager/index.js';

import TimezonePage from '@DocCore/backend/StaticConfig/Timezones/index.js';

import AddressPage from '@DocCore/backend/UserModules/Address/index.js';
import FormTest from '@DocCore/backend/UserModules/Authentication/components/ui/template-01/userProfile/form-test.js';
import AuthenticationPage from '@DocCore/backend/UserModules/Authentication/index.js';
import AuthTemplate1 from '@DocCore/backend/UserModules/Authentication/components/ui/template-01/index.js';

import RolesPage from '@DocCore/backend/UserModules/Roles/index.js';

import { FeedbackPage } from '@DocCore/backend/UserModules/Feedback/index.js';


import CategoriesPage from '@DocCore/backend/BizModules/Categories/index.js';
import ProductPage from '@DocCore/backend/BizModules/Products/index.js';
import SubCategoriesPage from '@DocCore/backend/BizModules/SubCategories/index.js';

import { TableConfigStaticInfo } from '@DocCore/backend/DatabasesTablesDesign/table-config_static_info/index.js';
import { TableUserAccountsInfo } from '@DocCore/backend/DatabasesTablesDesign/table-user_accounts_info/index.js';
import { TableBlogNfInfo } from '@DocCore/backend/DatabasesTablesDesign/table-blog_nf_info/index.js';
/* Backend Imports ::: END */

export const AppRouting = ()=>{

 return (
    <BrowserRouter basename="/">
       <Routes>
       
            <Route exact path="/" element={<Welcome />} />
          {/*  React Urls ::: START */}
            <Route exact path="Component/AccordianList" element={<ReactPage activeId="react"><AccordianPage /></ReactPage>} />
            <Route exact path="Component/AccordianListItems" element={<ReactPage activeId="react"><AccordianListItemsPage  /></ReactPage>} />
            <Route exact path="Component/Alert" element={<ReactPage activeId="react"><AlertPage /></ReactPage>} />
            <Route exact path="Component/Avatar" element={<ReactPage activeId="react"><AvatarPage /></ReactPage>} />
            <Route exact path="Component/Badge" element={<ReactPage activeId="react"><BadgePage /></ReactPage>} />
            <Route exact path="Component/Breadcrumb" element={<ReactPage activeId="react"><BreadcrumbPage /></ReactPage>} />
            <Route exact path="Component/Button" element={<ReactPage activeId="react"><ButtonPage /></ReactPage>} />
            <Route exact path="Component/Calendar" element={<ReactPage activeId="react"><CalendarPage /></ReactPage>} />
            <Route exact path="Component/CanvasDrawer" element={<ReactPage activeId="react"><CanvasDrawerPage /></ReactPage>} />
            <Route exact path="Component/Card" element={<ReactPage activeId="react"><CardPage /></ReactPage>} />
            <Route exact path="Component/CardFlip" element={<ReactPage activeId="react"><CardFlipPage /></ReactPage>} />
            <Route exact path="Component/CardScroll" element={<ReactPage activeId="react"><CardScrollPage /></ReactPage>} />
            <Route exact path="Component/CardSlider" element={<ReactPage activeId="react"><CardSliderPage /></ReactPage>} />
            <Route exact path="Component/Carousel" element={<ReactPage activeId="react"><CarouselPage /></ReactPage>} />
            <Route exact path="Component/DataTable" element={<ReactPage activeId="react"><DataTablePage /></ReactPage>} />
            <Route exact path="Component/Drawer" element={<ReactPage activeId="react"><DrawerPage /></ReactPage> } />
            <Route exact path="Component/FlexDrawer" element={<ReactPage activeId="react"><FlexDrawerPage /></ReactPage>} />
            <Route exact path="Component/FloatingButton" element={<ReactPage activeId="react"><FloatingButtonPage /></ReactPage>} />
            <Route exact path="Component/Loading" element={<ReactPage activeId="react"><LoadingPage /></ReactPage>} />
            <Route exact path="Component/Modal" element={<ReactPage activeId="react" ><ModalPage /></ReactPage> } />
            <Route exact path="Component/Nav" element={<ReactPage activeId="react" ><NavPage /></ReactPage> } />
            <Route exact path="Component/Pill" element={<ReactPage activeId="react" ><PillPage /></ReactPage> } />
            <Route exact path="Component/ProgressBar" element={<ReactPage activeId="react"><ProgressBarPage /></ReactPage>} />
            <Route exact path="Component/Tab" element={<ReactPage activeId="react" ><TabPage /></ReactPage> } />
            <Route exact path="Component/Table" element={<ReactPage activeId="react"><TablePage /></ReactPage>} />
            <Route exact path="Component/TablePagination" element={<ReactPage activeId="react"><TablePaginationPage /></ReactPage>} />
            <Route exact path="Component/TreeView" element={<ReactPage activeId="react"><TreeViewPage /></ReactPage>} />
            <Route exact path="Component/Menu" element={<ReactPage activeId="react"><MenuPage /></ReactPage>} />
            <Route exact path="Component/Tag" element={<ReactPage activeId="react"><TagPage /></ReactPage>} />
            <Route exact path="Component/Timeline" element={<ReactPage activeId="react"><TimelinePage /></ReactPage>} />
            <Route exact path="Component/Toast" element={<ReactPage activeId="react"><ToastPage /></ReactPage>} />
            <Route exact path="Component/Hover" element={<ReactPage activeId="react"><HoverPage /></ReactPage>} />
            <Route exact path="Component/Icon" element={<ReactPage activeId="react"><IconPage /></ReactPage>} />
            
            <Route exact path="Feature/SpeechListener" element={<ReactPage activeId="react"><SpeechListenerPage /></ReactPage>} />
            
            <Route exact path="FormElement/Autocomplete" element={<ReactPage activeId="react"><AutocompletePage /></ReactPage> } />
            <Route exact path="FormElement/SelectDropdown" element={<ReactPage activeId="react"><SelectPage /></ReactPage>} />
            <Route exact path="FormElement/Switch" element={<ReactPage activeId="react"><SwitchPage /></ReactPage>} />
            <Route exact path="FormElement/Dropdown" element={<ReactPage activeId="react"><DropdownPage /></ReactPage> } />
            <Route exact path="FormElement/Email" element={<ReactPage activeId="react"><EmailPage /></ReactPage>} />
            <Route exact path="FormElement/FileUpload" element={<ReactPage activeId="react"><FileUploadPage /></ReactPage>} />
            <Route exact path="FormElement/Password" element={<ReactPage activeId="react"><PasswordPage /></ReactPage> } />
            <Route exact path="FormElement/TextBox" element={<ReactPage activeId="react"><TextBoxPage /></ReactPage>} />
            <Route exact path="FormElement/TextArea" element={<ReactPage activeId="react"><TextAreaPage /></ReactPage>} />
            <Route exact path="FormElement/ColorPicker" element={<ReactPage activeId="react"><ColorPickerPage /></ReactPage>} />
            <Route exact path="FormElement/Choice" element={<ReactPage activeId="react"><ChoicePage /></ReactPage>} />
            <Route exact path="FormElement/DateTimePicker" element={<ReactPage activeId="react"><DateTimePickerPage /></ReactPage>} />
            <Route exact path="FormElement/Range" element={<ReactPage activeId="react"><RangePage /></ReactPage>} />
            <Route exact path="FormElement/Rating" element={<ReactPage activeId="react"><RatingPage /></ReactPage>} />
            
            <Route exact path="Maps/Leaflet" element={<ReactPage activeId="react"><LeafletPage /></ReactPage>} />
            <Route exact path="Maps/Globe" element={<ReactPage activeId="react"><GlobePage /></ReactPage>} />
            
            <Route exact path="HeadersAndFooters/Headings" element={<ReactPage activeId="react"><HeadingPage /></ReactPage>} />
            
            <Route exact path="Layout/Fonts" element={<ReactPage activeId="react"><FontPage /></ReactPage>} />
            <Route exact path="Layout/GridSystem" element={<ReactPage activeId="react"><GridSystemPage /></ReactPage>} />
            <Route exact path="Layout/Order" element={<ReactPage activeId="react"><OrderPage /></ReactPage>} />
            <Route exact path="Layout/SideWrapperNavabar" element={<ReactPage activeId="react"><SideWrapperNavabarPage /></ReactPage>} />
            <Route exact path="Media/VideoPlayer" element={<ReactPage activeId="react"><VideoPlayerPage /></ReactPage>} />
            <Route exact path="NodeJavascript/BlinkTextPrint" element={<ReactPage activeId="react"><BlinkTextPrintPage /></ReactPage>} />
          
            <Route exact path="Visualization/AreaChart" element={<ReactPage activeId="react"><AreaChartPage /></ReactPage>} />
            <Route exact path="Visualization/BarChart" element={<ReactPage activeId="react"><BarChartPage /></ReactPage>} />
            <Route exact path="Visualization/BoxChart" element={<ReactPage activeId="react"><BoxChartPage /></ReactPage>} />
            <Route exact path="Visualization/CompositionChart" element={<ReactPage activeId="react"><CompositionChartPage /></ReactPage>} />
            <Route exact path="Visualization/CorrelationChart" element={<ReactPage activeId="react"><CorrelationChartPage /></ReactPage>} />
            <Route exact path="Visualization/DendogramChart" element={<ReactPage activeId="react"><DendogramChartPage /></ReactPage>} />
            <Route exact path="Visualization/FlowChart" element={<ReactPage activeId="react"><FlowChartPage /></ReactPage>} />
            <Route exact path="Visualization/FunnelChart" element={<ReactPage activeId="react"><FunnelChartPage /></ReactPage>} />
            <Route exact path="Visualization/GeoMap" element={<ReactPage activeId="react"><GeoMapPage /></ReactPage>} />
            <Route exact path="Visualization/LineChart" element={<ReactPage activeId="react"><LineChartPage /></ReactPage>} />
            <Route exact path="Visualization/PieChart" element={<ReactPage activeId="react"><PieChartPage /></ReactPage>} />
            <Route exact path="Visualization/SankeyChart" element={<ReactPage activeId="react"><SankeyChartPage /></ReactPage> } />
            <Route exact path="Visualization/ScatterChart" element={<ReactPage activeId="react"><ScatterChartPage /></ReactPage>} />
            <Route exact path="Visualization/TreeMapChart" element={<ReactPage activeId="react"><TreeMapChartPage /></ReactPage>} />
            <Route exact path="Visualization/TwoByTwoChart" element={<ReactPage activeId="react"><TwoByTwoChartPage /></ReactPage>} />
            <Route exact path="Visualization/VennChart" element={<ReactPage activeId="react"><VennChartPage /></ReactPage>} />
            <Route exact path="Visualization/WaterfallChart" element={<ReactPage activeId="react"><WaterfallChartPage /></ReactPage>} />
            <Route exact path="Themes/AppThemes" element={<ReactPage activeId="react"><AppThemesPage /></ReactPage>} />
            <Route exact path="Utilities/GridUtility" element={<ReactPage activeId="react"><GridUtilityPage /></ReactPage>} />
            <Route exact path="Utilities/StylesUtility" element={<ReactPage activeId="react"><StylesUtilityPage /></ReactPage>} />
            <Route exact path="CodeEditorsViewers/Highlight" element={<ReactPage activeId="react"><HighlightPage /></ReactPage>} />
            <Route exact path="CodeEditorsViewers/Stackblitz" element={<ReactPage activeId="react"><StackblitzPage /></ReactPage>} />
            <Route exact path="CodeEditorsViewers/RichTextEditor" element={<ReactPage activeId="react"><RichTextEditorPage /></ReactPage>} />
            <Route exact path="AdvancedTopics/ReactContext" element={<ReactPage activeId="react"><ReactContextPage /></ReactPage>} />
            <Route exact path="AdvancedTopics/RxJS" element={<ReactPage activeId="react"><RxJSPage /></ReactPage>} />
            <Route exact path="ReadyMadeScreen/ImageGallery" element={<ReactPage activeId="react"><ImageGalleryPage /></ReactPage> } />
            <Route exact path="ReadyMadeScreen/ReadyMadeDropdowns" element={<ReactPage activeId="react"><ReadyMadeDropdownsPage /></ReactPage>} />
          {/*  React Urls ::: END */}

          {/*  Backend Urls ::: START */}
            <Route exact path="Basics/GetStarted" element={<BackendPage activeId="backend"><GetStartedPage /></BackendPage>} />
            <Route exact path="CloudStorage/SelfFileUpload" element={<BackendPage activeId="backend"><SelfFileUploadPage /></BackendPage>} />
            <Route exact path="CloudStorage/SelfFileManager" element={<BackendPage activeId="backend"><SelfFileManagerPage /></BackendPage>} />
            <Route exact path="StaticConfig/Timezones" element={<BackendPage activeId="backend"><TimezonePage /></BackendPage>} />
            <Route exact path="UserModules/Address" element={<BackendPage activeId="backend"><AddressPage /></BackendPage>} />
            <Route exact path="Sample/Form" element={<FormTest />} />
            <Route exact path="UserModules/Authentication" element={<BackendPage activeId="backend"><AuthenticationPage /></BackendPage>} />
            <Route exact path="UserModules/Authentication/Template1/:show" element={<AuthTemplate1 />} />
            <Route exact path="UserModules/Authentication/Template1/:show/:userId" element={<AuthTemplate1 />} />
            <Route exact path="UserModules/Roles" element={<BackendPage activeId="backend"><RolesPage /></BackendPage>} />
            <Route exact path="UserModules/Feedback" element={<BackendPage activeId="backend"><FeedbackPage /></BackendPage>} />
            <Route exact path="BizModules/Categories" element={<BackendPage activeId="backend"><CategoriesPage /></BackendPage>} />
            <Route exact path="BizModules/SubCategories" element={<BackendPage activeId="backend"><SubCategoriesPage /></BackendPage>} />
            <Route exact path="BizModules/Products" element={<BackendPage activeId="backend"><ProductPage /></BackendPage>} />
            <Route exact path="DatabasesTablesDesign/TableConfigStaticInfo" element={<BackendPage activeId="backend"><TableConfigStaticInfo /></BackendPage>} />
            <Route exact path="DatabasesTablesDesign/TableUserAccountsInfo" element={<BackendPage activeId="backend"><TableUserAccountsInfo /></BackendPage>} />
            <Route exact path="DatabasesTablesDesign/TableBlogNfInfo" element={<BackendPage activeId="backend"><TableBlogNfInfo /></BackendPage>} />
          {/*  Backend Urls ::: END */}
       </Routes>    
    </BrowserRouter>
 );
};