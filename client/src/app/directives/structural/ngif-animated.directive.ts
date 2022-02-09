import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import { CoreAnimationDirective } from "../gsap/core-animation.directive";

/**
 * This directive will show and hide an embedded viewRef using an @Input parameter called ngIfAnimated.
 * If passed show boolean is true, then it will create and embeddedView,
 * else it will dispatch a CustomEvent on the first rootNode,
 * passing the viewContainer reference.
 *
 */
@Directive({
  selector: "[NgIfAnimated]"
})
export class NgifAnimatedDirective{
  childViewRef: EmbeddedViewRef<CoreAnimationDirective>|null = null;

  constructor(
    private el: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  @Input()
  set ngIfAnimated(show: boolean){
    if(show){
      this.childViewRef = this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      if(this.childViewRef){
        const node = this.childViewRef.rootNodes[0];
        if(node){
          node.dispatchEvent(new CustomEvent(
            'animate-out',
            {
              detail: {
                parentViewRef: this.viewContainer
              }
            }
          ));
        }
      }
    }
  }
}
