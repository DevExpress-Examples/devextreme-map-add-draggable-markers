window.DxSample = window.DxSample || {};

$(function () {
    DevExpress.devices.current({
        platform: 'generic'
    });
    DxSample.app = new DevExpress.framework.html.HtmlApplication({
        namespace: DxSample,
        defaultLayout: DxSample.config.defaultLayout
     });
    DxSample.app.router.register(":view/:id", { view: "Index", id: undefined });
});
