(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4787],{14060:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return M}});var a=n(14744),t=n(56785),i=n(69743),l=n(76127),s=n(16339),o=n(85893),c=function(){var e=(0,a.mV)().i18n,r=(0,s.T)();return(0,o.jsx)("div",{className:"flex items-center flex-grow w-full gap-4 sm:w-auto",children:(0,o.jsxs)("div",{className:"flex items-center flex-grow w-full gap-2 px-3 py-2 bg-opacity-50 border rounded border-dark-800 bg-dark-900 sm:w-auto",children:[(0,o.jsx)(i.Z,{strokeWidth:3,width:20,height:20}),(0,o.jsx)("input",{className:"w-full bg-transparent text-high-emphesis placeholder:text-low-emphesis",placeholder:e._(e._("Search by token or farm")),onChange:function(e){return r((0,l.LK)(e.target.value))}})]})})},u=n(59499),d=n(55929),m=n(83567),h=n(85874),p=n(89046),f=n(41664),v=n.n(f),g=n(67294),y=n(79521),x=function(){var e=(0,a.mV)().i18n,r=(0,s.C)(l.wA).searchQuery;return(0,o.jsx)("div",{className:"flex flex-row items-center justify-between px-2 py-2",children:(0,o.jsx)(t.Z,{variant:"base",className:"text-high-emphesis",weight:700,children:r?"".concat(e._(e._("Search results for"))," '").concat(r,"'"):e._(e._("Top Farms"))})})},w=function(e){!function(e){var r=(0,s.C)(l.wA).searchQuery;(0,g.useMemo)((function(){return e("pair",{searchQuery:r})}),[r,e])}(e)},j=n(19485),b=n(31518),P=n(41626),k=n(31969),N=n(62483),_=function(e,r,n){return e.filter((function(e){var r,a,t,i,l,s,o,c,u,d,m,h,p=e.original,f=null===p||void 0===p||null===(r=p.pair)||void 0===r||null===(a=r.token0)||void 0===a||null===(t=a.symbol)||void 0===t||null===(i=t.concat(null===p||void 0===p||null===(o=p.pair)||void 0===o||null===(c=o.token0)||void 0===c?void 0:c.name))||void 0===i||null===(l=i.concat(null===p||void 0===p||null===(u=p.pair)||void 0===u||null===(d=u.token1)||void 0===d?void 0:d.symbol))||void 0===l||null===(s=l.concat(null===p||void 0===p||null===(m=p.pair)||void 0===m||null===(h=m.token1)||void 0===h?void 0:h.name))||void 0===s?void 0:s.toLowerCase();return!n.searchQuery.length||f.includes(n.searchQuery.toLowerCase())}))};function A(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?A(Object(n),!0).forEach((function(r){(0,u.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var C=function(e){var r=e.chainId,n=e.farms,a=function(e,r){var n=(0,N.e_)(),a=(0,g.useMemo)((function(){return null===r||void 0===r?void 0:r.map((function(e){var r;return{pair:{id:e.pair.id,token0:e.pair.token0,token1:e.pair.token1,name:null!==(r=e.pair.symbol)&&void 0!==r?r:"".concat(e.pair.token0.symbol,"-").concat(e.pair.token1.symbol),type:e.pair.symbol?"Kashi Farm":"BallSwapper Farm"},rewards:e.rewards,liquidity:e.tvl,apr:{daily:100*e.roiPerDay,monthly:100*e.roiPerMonth,annual:100*e.roiPerYear},rewardApr:{daily:100*e.rewardAprPerDay,monthly:100*e.rewardAprPerMonth,annual:100*e.rewardAprPerYear},feeApy:{daily:100*e.feeApyPerDay,monthly:100*e.feeApyPerMonth,annual:100*e.feeApyPerYear}}}))}),[r]),i=(0,g.useMemo)((function(){return[{Header:"Name",accessor:"pair",maxWidth:150,Cell:function(r){var a=(0,j.getAddress)(r.value.token0.id),t=(0,g.useMemo)((function(){return a in n?n[a]:new b.WU(e,(0,j.getAddress)(r.value.token0.id),Number(r.value.token0.decimals),r.value.token0.symbol,r.value.token0.name)}),[r,a]),i=(0,j.getAddress)(r.value.token1.id),l=(0,g.useMemo)((function(){return i in n?n[i]:new b.WU(e,i,Number(r.value.token1.decimals),r.value.token1.symbol,r.value.token1.name)}),[r,i]),s=(0,g.useMemo)((function(){return[t,l]}),[t,l]);return(0,o.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,o.jsx)(P.B,{currencies:s,size:40,dense:!0}),(0,o.jsx)("div",{id:"farm-".concat(r.value.token0.symbol,"/").concat(r.value.token1.symbol),className:"overflow-hidden font-bold text-high-emphesis overflow-ellipsis whitespace-nowrap",children:(0,o.jsxs)("div",{className:"flex flex-col ml-3 whitespace-nowrap",children:[(0,o.jsx)("div",{className:"font-bold text-high-emphesis",children:r.value.name}),(0,o.jsx)("div",{className:"text-secondary",children:r.value.type})]})})]})},filter:_},{Header:"TVL",accessor:"liquidity",minWidth:150,Cell:function(e){return(0,k.uf)(e.value,!0,!1,2)},align:"right"},{Header:"Rewards",accessor:"rewards",minWidth:150,Cell:function(e){return(0,o.jsx)("div",{className:"flex flex-col !items-end !justify-center",children:e.value.map((function(e,r){return(0,o.jsxs)(t.Z,{variant:"sm",weight:700,className:"flex gap-1.5 text-high-emphesis justify-center items-center",component:"span",children:[(0,k.uf)(e.rewardPerDay),(0,o.jsx)(P.X,{currency:e.currency,size:16})]},r)}))})},align:"right"},{Header:"Reward APR",accessor:"rewardApr.annual",minWidth:150,Cell:function(e){return e.value>1e4?">10,000%":(0,k.T3)(e.value,"NEW")},align:"right"},{Header:"Fee APY",accessor:"feeApy.annual",minWidth:150,Cell:function(e){return e.value>1e4?">10,000%":(0,k.T3)(e.value,"NEW")},align:"right"}]}),[n,e]);return(0,g.useMemo)((function(){return{config:{columns:i,data:null!==a&&void 0!==a?a:[],initialState:{sortBy:[{id:"rewardApr.annual",desc:!0}]},autoResetFilters:!1}}}),[i,a])}(r,n),i=a.config,l=(0,y.useTable)(i,y.useFlexLayout,y.useFilters,y.useSortBy,y.usePagination),s=l.getTableProps,c=l.getTableBodyProps,u=l.headerGroups,f=l.rows,A=l.page,C=l.gotoPage,S=l.canPreviousPage,E=l.canNextPage,F=l.prepareRow,T=l.setFilter,M=(l.toggleSortBy,l.state),R=M.pageIndex,W=M.pageSize;return w(T),(0,o.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,o.jsx)(x,{}),(0,o.jsx)("div",{className:p._O,children:(0,o.jsxs)("table",O(O({},s()),{},{className:p.RR,children:[(0,o.jsx)("thead",{children:u.map((function(e,r){return(0,g.createElement)("tr",O(O({},e.getHeaderGroupProps()),{},{key:r}),e.headers.map((function(r,n){return(0,g.createElement)("th",O(O({},r.getHeaderProps(r.getSortByToggleProps())),{},{key:n,className:(0,p.G0)(n,e.headers.length)}),r.render("Header"),(0,o.jsx)("span",{className:"inline-block ml-1 align-middle",children:r.isSorted?r.isSortedDesc?(0,o.jsx)(d.Z,{width:12}):(0,o.jsx)(m.Z,{width:12}):""}))})))}))}),(0,o.jsx)("tbody",O(O({},c()),{},{children:A.map((function(e,n){return F(e),(0,o.jsx)(v(),{href:{pathname:"/analytics/farms/".concat(e.original.pair.id),query:{chainId:r}},passHref:!0,children:(0,g.createElement)("tr",O(O({},e.getRowProps()),{},{key:n,className:p.vu}),e.cells.map((function(r,n){return(0,o.jsx)("td",O(O({},r.getCellProps()),{},{className:(0,p.zm)(n,e.cells.length),children:r.render("Cell")}),n)})))},n)}))}))]}))}),(0,o.jsx)(h.a,{pageIndex:R,pageSize:W,totalItems:f.length,gotoPage:C,canPreviousPage:S,canNextPage:E,loading:!f.length})]})},S=n(4725),E=n(22680),F=n(11163),T=n(2962);function M(){var e=(0,a.mV)().i18n,r=(0,F.useRouter)(),n=Number(r.query.chainId),i=(0,S.Z)({chainId:n});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(T.PB,{title:"Farm Analytics"}),(0,o.jsx)(E.CV,{className:"sm:!flex-row justify-between items-center",pattern:"bg-bubble",children:(0,o.jsxs)("div",{children:[(0,o.jsx)(t.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("Farm Analytics."))}),(0,o.jsx)(t.Z,{variant:"sm",weight:400,children:e._(e._("Farms are incentivized pools. Click on the column name to sort by APR or volume."))})]})}),(0,o.jsx)(E.A9,{children:(0,o.jsxs)("div",{className:"flex flex-col w-full gap-10",children:[(0,o.jsx)(c,{}),(0,o.jsx)(C,{chainId:n,farms:i})]})})]})}},92595:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/farms",function(){return n(14060)}])}},function(e){e.O(0,[8306,8529,9613,9521,4483,7032,8769,4725,9774,2888,179],(function(){return r=92595,e(e.s=r);var r}));var r=e.O();_N_E=r}]);