//<![CDATA[
$(document).ready(function () {

    var species = [
        { id: 1, parentId: 0, text: "Species dfs gfds fdg gf test" },
        { id: 2, parentId: 1, text: "Cat" },
        { id: 3, parentId: 1, text: "Dog" },
        { id: 4, parentId: 1, text: "Cow" },
        { id: 5, parentId: 2, text: "Abyssinian" },
        { id: 6, parentId: 2, text: "Aegean cat" },
        { id: 7, parentId: 2, text: "Australian Mist" },
        { id: 8, parentId: 3, text: "Affenpinscher" },
        { id: 9, parentId: 3, text: "Afghan Hound" },
        { id: 10, parentId: 3, text: "Airedale Terrier" },
        { id: 11, parentId: 3, text: "Akita Inu" },
        { id: 12, parentId: 0, text: "Birds" },
        { id: 13, parentId: 12, text: "Akekee" },
        { id: 14, parentId: 12, text: "Arizona Woodpecker" },
        { id: 15, parentId: 12, text: "Black-chinned Sparrow" }
    ];

  
    $("#treeViewContainer").dxTreeView({
        dataSource: species,
        dataStructure: 'plain',
        keyExpr: "id",
        displayExpr: "text",
        parentIdExpr: "parentId",
        onItemRendered: function(e){
          
          setTimeout(function(){
                   var parentEl = e.itemElement.parent();
            var hideElement = parentEl.find('.dx-treeview-toggle-item-visibility');
            hideElement.height(parentEl.height())
     
          },0)
          
        },
        width: 150
    });
});
//]]>
    