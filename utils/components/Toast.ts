export class Toast {
  title: string;
  message: string;
  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
  }

  close() {}

  checkTitle(title: string) {}

  checkMessage(message: string) {}

  check() {
    this.checkTitle(this.title);
    this.checkMessage(this.message);
  }
}
