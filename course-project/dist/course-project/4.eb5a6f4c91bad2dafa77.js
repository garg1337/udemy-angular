(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",(function(){return U}));var r=i("tyNb"),n=i("fXoL"),c=i("DBWA"),o=i("ofXK");const s=function(e){return["/recipes",e]};let b=(()=>{class e{constructor(e){this.recipeService=e}ngOnInit(){this.recipe=this.recipeService.getRecipe(this.id)}}return e.\u0275fac=function(t){return new(t||e)(n.Hb(c.a))},e.\u0275cmp=n.Bb({type:e,selectors:[["app-recipe-item"]],inputs:{id:"id"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(e,t){1&e&&(n.Kb(0,"a",0),n.Kb(1,"div",1),n.Kb(2,"h4",2),n.gc(3),n.Jb(),n.Kb(4,"p",3),n.gc(5),n.Jb(),n.Jb(),n.Kb(6,"span",4),n.Ib(7,"img",5),n.Jb(),n.Jb()),2&e&&(n.Ub("routerLink",n.Xb(5,s,t.id)),n.xb(3),n.hc(t.recipe.name),n.xb(2),n.hc(t.recipe.description),n.xb(2),n.Vb("alt",t.recipe.name),n.Ub("src",t.recipe.imagePath,n.cc))},directives:[r.f,r.e],styles:[""]}),e})();function a(e,t){1&e&&n.Ib(0,"app-recipe-item",4),2&e&&n.Ub("id",t.index)}let p=(()=>{class e{constructor(e){this.recipeService=e}ngOnInit(){this.recipes=this.recipeService.getRecipes(),this.subscription=this.recipeService.recipesChanged.subscribe(e=>{this.recipes=e})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Hb(c.a))},e.\u0275cmp=n.Bb({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],["routerLink","new",1,"btn","btn-success"],[3,"id",4,"ngFor","ngForOf"],[3,"id"]],template:function(e,t){1&e&&(n.Kb(0,"div",0),n.Kb(1,"div",1),n.Kb(2,"button",2),n.gc(3,"New Recipe"),n.Jb(),n.Jb(),n.Jb(),n.Ib(4,"hr"),n.Kb(5,"div",0),n.Kb(6,"div",1),n.ec(7,a,1,1,"app-recipe-item",3),n.Jb(),n.Jb()),2&e&&(n.xb(7),n.Ub("ngForOf",t.recipes))},directives:[r.d,o.h,b],styles:[""]}),e})(),d=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Bb({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(n.Kb(0,"div",0),n.Kb(1,"div",1),n.Ib(2,"app-recipe-list"),n.Jb(),n.Kb(3,"div",2),n.Ib(4,"router-outlet"),n.Jb(),n.Jb())},directives:[p,r.h],styles:[""]}),e})();var u=i("3V6w");function l(e,t){if(1&e&&(n.Kb(0,"li",12),n.gc(1),n.Jb()),2&e){const e=t.$implicit;n.xb(1),n.jc(" ",e.name," - (",e.amount,") ")}}const g=function(e){return["/recipes",e,"edit"]};function m(e,t){if(1&e){const e=n.Lb();n.Kb(0,"div"),n.Kb(1,"div",1),n.Kb(2,"div",2),n.Ib(3,"img",3),n.Jb(),n.Jb(),n.Kb(4,"div",1),n.Kb(5,"div",2),n.Kb(6,"h1"),n.gc(7),n.Jb(),n.Jb(),n.Jb(),n.Kb(8,"div",1),n.Kb(9,"div",2),n.Kb(10,"div",4),n.Kb(11,"button",5),n.gc(12,"Manage Recipe"),n.Ib(13,"span",6),n.Jb(),n.Kb(14,"ul",7),n.Kb(15,"li"),n.Kb(16,"a",8),n.Rb("click",(function(){return n.bc(e),n.Tb().onAddToShoppingList()})),n.gc(17,"To Shopping List"),n.Jb(),n.Jb(),n.Kb(18,"li"),n.Kb(19,"a",9),n.gc(20,"Edit Recipe"),n.Jb(),n.Jb(),n.Kb(21,"li"),n.Kb(22,"a",8),n.Rb("click",(function(){return n.bc(e),n.Tb().deleteRecipe()})),n.gc(23,"Delete Recipe"),n.Jb(),n.Jb(),n.Jb(),n.Jb(),n.Jb(),n.Jb(),n.Kb(24,"div",1),n.Kb(25,"div",2),n.gc(26),n.Jb(),n.Jb(),n.Kb(27,"div",1),n.Kb(28,"div",2),n.Kb(29,"ul",10),n.ec(30,l,2,2,"li",11),n.Jb(),n.Jb(),n.Jb(),n.Jb()}if(2&e){const e=n.Tb();n.xb(3),n.Ub("src",e.recipe.imagePath,n.cc)("alt",e.recipe.name),n.xb(4),n.hc(e.recipe.name),n.xb(12),n.Ub("routerLink",n.Xb(6,g,e.id)),n.xb(7),n.hc(e.recipe.description),n.xb(4),n.Ub("ngForOf",e.recipe.ingredients)}}let h=(()=>{class e{constructor(e,t,i){this.recipeService=e,this.route=t,this.router=i}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.recipe=this.recipeService.getRecipe(this.id),this.recipe||this.router.navigate(["/recipes"])})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}deleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}}return e.\u0275fac=function(t){return new(t||e)(n.Hb(c.a),n.Hb(r.a),n.Hb(r.c))},e.\u0275cmp=n.Bb({type:e,selectors:[["app-recipe-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],[1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[2,"cursor","pointer",3,"routerLink"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&n.ec(0,m,31,8,"div",0),2&e&&n.Ub("ngIf",t.recipe)},directives:[o.i,u.a,r.f,o.h],styles:[""]}),e})(),v=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Bb({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,t){1&e&&(n.Kb(0,"h3"),n.gc(1,"Please select a Recipe!"),n.Jb())},styles:[""]}),e})();var f=i("3Pt+");class J{constructor(e,t,i,r){this.name=e,this.description=t,this.imagePath=i,this.ingredients=r}}const K=function(){return{"margin-top":"10px"}};function w(e,t){if(1&e){const e=n.Lb();n.Kb(0,"div",17),n.Kb(1,"div",18),n.Ib(2,"input",19),n.Jb(),n.Kb(3,"div",20),n.Ib(4,"input",21),n.Jb(),n.Kb(5,"div",20),n.Kb(6,"button",4),n.Rb("click",(function(){n.bc(e);const i=t.index;return n.Tb().onDeleteIngredient(i)})),n.gc(7,"X"),n.Jb(),n.Jb(),n.Jb()}if(2&e){const e=t.index;n.Ub("ngStyle",n.Wb(2,K))("formGroupName",e)}}let x=(()=>{class e{constructor(e,t,i){this.route=e,this.recipeService=t,this.router=i,this.editMode=!1}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=null!=e.id,this.initForm()})}initForm(){let e="",t="",i="",r=new f.b([]);if(this.editMode){const n=this.recipeService.getRecipe(this.id);if(e=n.name,t=n.imagePath,i=n.description,n.ingredients)for(let e of n.ingredients)r.push(new f.f({name:new f.d(e.name,f.r.required),amount:new f.d(e.amount,[f.r.required,f.r.pattern(/^[1-9]+[0-9]*$/)])}))}this.form=new f.f({name:new f.d(e,f.r.required),imagePath:new f.d(t,f.r.required),description:new f.d(i,f.r.required),ingredients:r})}onAddIngredient(){this.form.get("ingredients").push(new f.f({name:new f.d(null,f.r.required),amount:new f.d(null,[f.r.required,f.r.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(e){this.form.get("ingredients").removeAt(e)}get controls(){return this.form.get("ingredients").controls}onSubmit(){const e=new J(this.form.value.name,this.form.value.description,this.form.value.imagePath,this.form.value.ingredients);this.editMode?(this.recipeService.updateRecipe(this.id,e),this.router.navigate(["/recipes",this.id])):(this.recipeService.addRecipe(e),this.router.navigate(["/recipes",this.recipeService.getRecipes().length-1]))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}}return e.\u0275fac=function(t){return new(t||e)(n.Hb(r.a),n.Hb(c.a),n.Hb(r.c))},e.\u0275cmp=n.Bb({type:e,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],["alt","",1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row",3,"ngStyle","formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",3,"ngStyle","formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(e,t){if(1&e&&(n.Kb(0,"div",0),n.Kb(1,"div",1),n.Kb(2,"form",2),n.Rb("ngSubmit",(function(){return t.onSubmit()})),n.Kb(3,"div",0),n.Kb(4,"div",1),n.Kb(5,"button",3),n.gc(6,"Save"),n.Jb(),n.Kb(7,"button",4),n.Rb("click",(function(){return t.onCancel()})),n.gc(8,"Cancel"),n.Jb(),n.Jb(),n.Jb(),n.Kb(9,"div",0),n.Kb(10,"div",1),n.Kb(11,"div",5),n.Kb(12,"label",6),n.gc(13,"Name"),n.Jb(),n.Ib(14,"input",7),n.Jb(),n.Jb(),n.Jb(),n.Kb(15,"div",0),n.Kb(16,"div",1),n.Kb(17,"div",5),n.Kb(18,"label",8),n.gc(19,"Image URL"),n.Jb(),n.Ib(20,"input",9,10),n.Jb(),n.Jb(),n.Jb(),n.Kb(22,"div",0),n.Kb(23,"div",1),n.Ib(24,"img",11),n.Jb(),n.Jb(),n.Kb(25,"div",0),n.Kb(26,"div",1),n.Kb(27,"div",5),n.Kb(28,"label",12),n.gc(29,"Description"),n.Jb(),n.Ib(30,"textarea",13),n.Jb(),n.Jb(),n.Jb(),n.Kb(31,"div",0),n.Kb(32,"div",14),n.ec(33,w,8,3,"div",15),n.Ib(34,"hr"),n.Kb(35,"div",0),n.Kb(36,"div",1),n.Kb(37,"button",16),n.Rb("click",(function(){return t.onAddIngredient()})),n.gc(38,"Add Ingredient"),n.Jb(),n.Jb(),n.Jb(),n.Jb(),n.Jb(),n.Jb(),n.Jb(),n.Jb()),2&e){const e=n.Zb(21);n.xb(2),n.Ub("formGroup",t.form),n.xb(3),n.Ub("disabled",!t.form.valid),n.xb(19),n.Ub("src",e.value,n.cc),n.xb(9),n.Ub("ngForOf",t.controls)}},directives:[f.s,f.k,f.g,f.a,f.j,f.e,f.c,o.h,o.j,f.h,f.n],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var S=i("GXvH");let y=(()=>{class e{constructor(e,t){this.dataStorageService=e,this.recipesService=t}resolve(e,t){const i=this.recipesService.getRecipes();return 0===i.length?this.dataStorageService.fetchRecipes():i}}return e.\u0275fac=function(t){return new(t||e)(n.Ob(S.a),n.Ob(c.a))},e.\u0275prov=n.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=i("IzEk"),R=i("lJxs"),O=i("qXBG");const k=[{path:"",component:d,resolve:[y],canActivate:[(()=>{class e{constructor(e,t){this.authService=e,this.router=t}canActivate(e,t){return this.authService.user.pipe(Object(I.a)(1),Object(R.a)(e=>!!e||this.router.createUrlTree(["/auth"])))}}return e.\u0275fac=function(t){return new(t||e)(n.Ob(O.a),n.Ob(r.c))},e.\u0275prov=n.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()],children:[{path:"",component:v},{path:"new",component:x},{path:":id",component:h,resolve:[y]},{path:":id/edit",component:x,resolve:[y]}]}];let L=(()=>{class e{}return e.\u0275mod=n.Fb({type:e}),e.\u0275inj=n.Eb({factory:function(t){return new(t||e)},imports:[[r.g.forChild(k)],r.g]}),e})();var P=i("PCNd");let U=(()=>{class e{}return e.\u0275mod=n.Fb({type:e}),e.\u0275inj=n.Eb({factory:function(t){return new(t||e)},imports:[[L,f.i,f.p,P.a]]}),e})()}}]);