(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['input'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"calc-input-element\">\n    <label for=\"calc-description-input\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"input-description") || (depth0 != null ? lookupProperty(depth0,"input-description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"input-description","hash":{},"data":data,"loc":{"start":{"line":2,"column":40},"end":{"line":2,"column":61}}}) : helper)))
    + "</label>\n    <input type=\"text\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"input-description") || (depth0 != null ? lookupProperty(depth0,"input-description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"input-description","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":48}}}) : helper)))
    + "\">\n</div>";
},"useData":true});
})();