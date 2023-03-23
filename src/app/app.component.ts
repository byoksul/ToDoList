import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'JengalToDoList';
  itemList : ItemModel[]=[];
  title : string= '';


  handleAddToDoItemClick(){
    console.log("triggırlandık");
    let newItem = this.generateNewToDoItem (this.title) ;
    let resultAdd = this.addToDoItem(newItem);
    if (resultAdd){this.title='';}
  }
  generateNewToDoItem(title:string) {
    let newItem = new ItemModel();
    newItem.title = title;
    newItem.checked = false;
    newItem.id= Date.now().toString() + "item";
    return newItem;
  }
  
  addToDoItem(item:ItemModel){
    if (item && item.title){
      this.itemList.push(item);
      return true;
    }
    return false;
  }

  handleDeleteItemClick(id:string){
    this.deleteToDoItem(id);
  }
  deleteToDoItem(id:string){
    this.itemList= this.itemList.filter(item => item.id !=id);
  }

}

export class ItemModel{
  id!: string;
  title! :string;
  checked! :boolean;
}


