import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public data: any[] = [
    {
      text: 'Furniture',
      items: [
        { text: 'Tables & Chairs' },
        { text: 'Sofas' },
        { text: 'Occasional Furniture' },
      ],
    },
    {
      text: 'Decor',
      items: [
        { text: 'Bed Linen' },
        { text: 'Curtains & Blinds' },
        { text: 'Carpets' },
      ],
    },
  ];

  /**
   * A function that returns an observable instance which contains the
   * [child nodes](https://www.telerik.com/kendo-angular-ui/components/treeview/api/TreeViewComponent/#toc-children)
   * for a given parent node.
   */
  public children = (dataitem: any): Observable<any[]> => of(dataitem.items);

  /**
   * A function that determines whether a given node
   * [has children](https://www.telerik.com/kendo-angular-ui/components/treeview/api/TreeViewComponent/#toc-haschildren).
   */
  public hasChildren = (dataitem: any): boolean => !!dataitem.items;
}
