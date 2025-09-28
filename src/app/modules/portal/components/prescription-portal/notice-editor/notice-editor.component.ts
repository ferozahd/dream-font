import { Component, EventEmitter, inject, Input, Output, signal, WritableSignal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notice-editor',
  standalone: false,
  templateUrl: './notice-editor.component.html',
  styleUrl: './notice-editor.component.scss'
})
export class NoticeEditorComponent {
  @Input() modalId!: string;
  public readonly activeModal=inject(NgbActiveModal);
  public editorContent: WritableSignal<string> = signal<string>('');
  

  public table = signal<any>({});

  updateContent(event: KeyboardEvent): void {

    if (event.key === 'Escape') {
      console.log('Escape key pressed!');
    }
    if (event.shiftKey) {
      console.log('Shift + ' + event.key + ' pressed!');
    } else if (event.ctrlKey && event.key !== 'Control') {
      // This runs if Ctrl is held down AND another non-ctrl key is pressed
      console.log('Ctrl + ' + event.key + ' pressed!');

    } else if (event.altKey && event.key !== 'Alt') {
      // Alt key logic
      console.log('Alt + ' + event.key + ' pressed!');

    }

    // 3. Optional: Check for the modifier key being pressed alone
    if (event.key === 'Shift') {
      console.log('Shift key pressed alone.');
    }
    if (event.key === 'Control') {
      console.log('Control key pressed alone.');
    }
    const target = event.target as HTMLElement;
    const newContent = target.innerHTML;
    this.editorContent.set(newContent);
  }


  sendData() {
    // this.sendDataToParent.emit(this.editorContent()); // Emit the current content to the parent component
    this.activeModal.close({id: this.modalId, result: 'Saved' })
  }

  applyBold() {
    debugger
    const selection = window.getSelection();
    if (!selection?.rangeCount) return;
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontWeight = 'bold';
    range.surroundContents(span);
  }

  applyTab() {
    console.log('Tab key pressed');
   debugger
    const selection = window.getSelection();
    if(selection ==null || selection.focusOffset<1)
      return ;
    
  
    const range = selection.getRangeAt(0);

    const span = document.createElement('span');
    span.style.display = 'inline-flex';   // allow arrow + content inline
    span.style.alignItems = 'center';
    span.style.paddingLeft = '40px';
    span.style.border = 'solid black 1px';
  
    // Create the left arrow button
    const arrow = document.createElement('button');
    arrow.textContent = '←';  // left arrow
    arrow.style.marginRight = '5px';
    arrow.style.cursor = 'pointer';
    arrow.onclick = () => {
      // reduce padding-left by 10px each click, min 0
      const current = parseInt(span.style.paddingLeft || '0');
      span.style.paddingLeft = Math.max(0, current - 10) + 'px';
    };
  
    // Move selected content into a text node inside the span
    const selectedContent = range.extractContents();
    span.appendChild(arrow);          // arrow first
    span.appendChild(selectedContent); // then original content
  
    // Insert span at the original selection
    range.insertNode(span);
  }
  // Apply italic formatting
  applyItalic() {
    document.execCommand('italic');
  }

  // Apply bullet list formatting
  applyBulletList() {
    document.execCommand('insertUnorderedList');
  }

  // Insert a table at the current cursor position
  insertTable() {


    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);

  }



}
