import{jsxs as s,jsx as e,Fragment as S}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as x,classes as F}from"@dropins/tools/lib.js";import{Card as f,Header as m,Accordion as w,AccordionSection as G,ContentGrid as q,Image as $}from"@dropins/tools/components.js";import"../chunks/OrderCancelReasonsForm.js";import{useText as V,Text as H}from"@dropins/tools/i18n.js";import{C as W}from"../chunks/OrderLoaders.js";import"@dropins/tools/preact-compat.js";import{useState as z,useEffect as B}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/preact.js";import{events as J}from"@dropins/tools/event-bus.js";var T=(n=>(n.PENDING="pending",n.SHIPPING="shipping",n.COMPLETE="complete",n.PROCESSING="processing",n.HOLD="on hold",n.CANCELED="Canceled",n.SUSPECTED_FRAUD="suspected fraud",n.PAYMENT_REVIEW="payment review",n))(T||{});const K=({slots:n,orderData:i,collapseThreshold:t=10,routeProductDetails:c})=>{var I,u,v,O,L;const d=V({carrier:"Order.ShippingStatusCard.carrier",prepositionOf:"Order.ShippingStatusCard.prepositionOf",shippingCardTitle:"Order.ShippingStatusCard.shippingCardTitle",shippingInfoTitle:"Order.ShippingStatusCard.shippingInfoTitle",notYetShippedTitle:"Order.ShippingStatusCard.notYetShippedTitle",notYetShippedImagesTitle:"Order.ShippingStatusCard.notYetShippedImagesTitle",noInfoTitle:"Order.OrderStatusContent.noInfoTitle"}),g=c?"a":"span",a=(I=i==null?void 0:i.status)==null?void 0:I.toLocaleLowerCase(),M=((u=i==null?void 0:i.shipments)==null?void 0:u.length)===1&&(a==null?void 0:a.includes(T.COMPLETE)),l=(v=i==null?void 0:i.items)==null?void 0:v.filter(r=>(r==null?void 0:r.quantityShipped)===0);if(!i||a!=null&&a.includes(T.CANCELED))return null;if(!((O=i==null?void 0:i.shipments)!=null&&O.length))return s(f,{variant:"secondary",className:"order-shipping-status-card",children:[e(m,{title:d.shippingInfoTitle}),e("div",{className:"order-shipping-status-card__header",children:s("div",{className:"order-shipping-status-card__header--content",children:[i!=null&&i.carrier?e("p",{children:i==null?void 0:i.carrier}):null,e("p",{children:d.noInfoTitle})]})})]});const R=e(H,{id:"Order.ShippingStatusCard.notYetShippedItem",plural:l==null?void 0:l.length});return s(S,{children:[(L=i==null?void 0:i.shipments)==null?void 0:L.map(({tracking:r,items:h,id:o},U)=>{const Y=e(H,{id:"Order.ShippingStatusCard.notYetShippedItem",plural:h==null?void 0:h.length});return s(f,{variant:"secondary",className:"order-shipping-status-card",children:[e(m,{title:d.shippingCardTitle}),r==null?void 0:r.map(p=>{var C;return s("div",{className:"order-shipping-status-card__header",role:"status",children:[s("div",{className:"order-shipping-status-card__header--content",children:[s("p",{children:[d.carrier," ",(C=p==null?void 0:p.carrier)==null?void 0:C.toLocaleUpperCase()," | ",p==null?void 0:p.number]}),e("p",{children:p==null?void 0:p.title})]}),n!=null&&n.DeliveryTrackActions?e(x,{"data-testid":"deliverySlotActions",name:"DeliveryTrackActions",slot:n==null?void 0:n.DeliveryTrackActions,context:{trackInformation:p}}):null]},p.number)}),M?null:e(w,{actionIconPosition:"right","data-testid":"dropinAccordion",children:e(G,{"data-position":U+1,defaultOpen:t>=(h==null?void 0:h.length),title:s(S,{children:[`${d.notYetShippedImagesTitle} (${h==null?void 0:h.length} `,Y,")"]}),children:e(q,{maxColumns:6,emptyGridContent:e(S,{}),className:"order-shipping-status-card__images",children:h==null?void 0:h.map(p=>{var y,_,A,b,E,N;const C=(A=(_=(y=p==null?void 0:p.orderItem)==null?void 0:y.product)==null?void 0:_.thumbnail)==null?void 0:A.label,j=(N=(E=(b=p==null?void 0:p.orderItem)==null?void 0:b.product)==null?void 0:E.thumbnail)==null?void 0:N.url;return e(g,{href:(c==null?void 0:c(p))??"#",children:e($,{alt:C,src:j||"",width:85,height:114})},p.id)})})})}),n!=null&&n.DeliveryTimeLine?e(x,{"data-testid":"deliverySlotTimeLine",name:"DeliveryTimeLine",slot:n==null?void 0:n.DeliveryTimeLine,context:{}}):null]},o)}),l!=null&&l.length?s(f,{variant:"secondary",className:"order-shipping-status-card","data-testid":"dropinAccordionNotYetShipped2",children:[e(m,{title:d.notYetShippedTitle}),e(w,{actionIconPosition:"right",children:e(G,{defaultOpen:t>=(l==null?void 0:l.length),title:s(S,{children:[`${d.notYetShippedImagesTitle} (${l==null?void 0:l.length} `,R,")"]}),children:e("div",{className:"order-shipping-status-card__images",children:l==null?void 0:l.map(r=>{var h,o;return e(g,{href:(c==null?void 0:c(r))??"#",children:e($,{alt:(h=r.thumbnail)==null?void 0:h.label,src:((o=r.thumbnail)==null?void 0:o.url)||"",width:85,height:114})},r.id)})})})})]}):null]})},Q=({orderData:n})=>{const[i,t]=z(n);return B(()=>{const c=J.on("order/data",d=>{t(d)},{eager:!0});return()=>{c==null||c.off()}},[]),{order:i}},rn=({slots:n,className:i,collapseThreshold:t,orderData:c,routeProductDetails:d})=>{const{order:g}=Q({orderData:c});return e("div",{className:F(["order-shipping-status",i]),children:g?e(K,{slots:n,orderData:g,collapseThreshold:t,routeProductDetails:d}):e(W,{withCard:!1})})};export{rn as ShippingStatus,rn as default};
