(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,43304,e=>{"use strict";var i=e.i(27911),r=e.i(67479),a=e.i(13485);function t({eyebrow:e="Personal news",title:r,children:n,current:o=""}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{className:"skip-link",href:"#main",children:"本文へ移動"}),(0,i.jsx)(a.default,{current:o}),(0,i.jsx)("main",{id:"main",className:"auth-page",children:(0,i.jsxs)("section",{className:"auth-card","aria-labelledby":"page-title",children:[(0,i.jsx)("p",{className:"eyebrow",children:e}),(0,i.jsx)("h1",{id:"page-title",children:r}),n]})}),(0,i.jsx)("style",{children:`
        :root { color-scheme: dark; --bg:#10141b; --panel:#202631; --line:#3b4352; --ink:#f7f7fb; --muted:#b5bbc8; --accent:#4fd1c5; --danger:#ffb4ab; }
        * { box-sizing: border-box; }
        body { margin:0; color:var(--ink); background:var(--bg); font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; line-height:1.55; }
        a { color:var(--accent); }
        a:focus-visible, button:focus-visible, input:focus-visible { outline:3px solid var(--accent); outline-offset:3px; }
        .skip-link { position:fixed; left:12px; top:8px; z-index:20; padding:8px 10px; color:#071316; background:var(--accent); font-weight:800; transform:translateY(-150%); }
        .skip-link:focus { transform:translateY(0); }
        .auth-page { min-height:calc(100vh - 56px); display:grid; place-items:start center; padding:clamp(24px,7vw,72px) 16px 56px; }
        .auth-card { width:min(100%, 480px); padding:clamp(20px,5vw,36px); border:1px solid var(--line); border-radius:14px; background:var(--panel); box-shadow:0 18px 55px rgba(0,0,0,.2); }
        .eyebrow { margin:0 0 5px; color:var(--accent); font-size:12px; font-weight:800; letter-spacing:.12em; text-transform:uppercase; }
        h1 { margin:0 0 18px; font-size:clamp(28px,7vw,38px); line-height:1.15; }
        .lead, .muted { color:var(--muted); }
        .stack { display:grid; gap:14px; }
        label { font-weight:700; }
        input { width:100%; min-height:48px; padding:10px 12px; border:1px solid #697386; border-radius:8px; color:var(--ink); background:#141922; font:inherit; }
        button, .button { width:100%; min-height:48px; display:inline-flex; align-items:center; justify-content:center; padding:10px 16px; border:1px solid var(--accent); border-radius:8px; color:#071316; background:var(--accent); font:inherit; font-weight:800; text-decoration:none; cursor:pointer; }
        button.secondary { color:var(--ink); background:transparent; border-color:#697386; }
        button:disabled { cursor:not-allowed; opacity:.6; }
        .divider { display:flex; align-items:center; gap:10px; color:var(--muted); font-size:12px; }
        .divider::before, .divider::after { content:""; height:1px; flex:1; background:var(--line); }
        .notice { padding:12px; border:1px solid #477f7a; border-radius:8px; background:#173431; }
        .error { color:var(--danger); }
        .actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:20px; }
        .actions a { min-height:44px; display:inline-flex; align-items:center; }
        fieldset { border:1px solid var(--line); border-radius:10px; margin:0; padding:14px; }
        legend { font-weight:800; padding:0 6px; }
        .theme-radio-grid { display:grid; gap:9px; grid-template-columns:1fr 1fr; }
        .theme-radio { align-items:center; border:2px solid transparent; border-radius:9px; color:#17222b; cursor:pointer; display:flex; gap:9px; min-height:64px; padding:9px; }
        .theme-radio:has(input:checked) { border-color:var(--accent); }
        .theme-radio input { flex:none; min-height:24px; width:24px; }
        .theme-radio span { display:grid; }
        .theme-radio small { font-size:11px; }
        .theme-radio-paper { background:#f5eddd; }.theme-radio-sky { background:#dff3ff; }.theme-radio-forest { background:#dcecdf; }.theme-radio-midnight { background:#17283c; color:#fff; }
        .history-controls { border-top:1px solid var(--line); display:grid; gap:9px; padding-top:16px; }
        .history-controls h2 { font-size:18px; margin:0; }
        .danger-button { border-color:#d97777 !important; color:#ffd4d4 !important; }
        .notice-line { color:var(--accent); min-height:1.5em; }
        @media (max-width:360px) { .auth-card { padding:20px 16px; } }
        @media (max-width:420px) { .theme-radio-grid { grid-template-columns:1fr; } }
      `})]})}var n=e.i(19506);let o={expired:"ログインリンクの有効期限が切れているか、すでに使用されています。ログイン画面から新しいリンクをお試しください。",denied:"このアカウントではログインを完了できませんでした。招待に使用されたアカウントをご確認ください。",config:"認証サービスはまだ設定されていません。共通ニュースは引き続きご覧いただけます。",failed:"ログイン処理を完了できませんでした。時間をおいて再度お試しください。"};e.s(["default",0,function(){let[e,a]=(0,r.useState)("failed");return(0,r.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("reason");a(Object.hasOwn(o,e)?e:"failed")},[]),(0,i.jsxs)(t,{title:"ログインできませんでした",children:[(0,i.jsx)("p",{className:"lead",role:"alert",children:o[e]}),(0,i.jsxs)("div",{className:"actions",children:[(0,i.jsx)("a",{href:(0,n.sitePath)("/login/"),children:"ログイン画面へ戻る"}),(0,i.jsx)("a",{href:(0,n.sitePath)("/"),children:"共通ニュースを見る"})]})]})}],43304)}]);