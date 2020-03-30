interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '12',
  size: {
    height: 10,
    width: 10
  },
  color: '#ccc'
}

const rect2 = {} as Rect
const rect3 = <Rect>{}

// === inheritance ===

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect4: RectWithArea = {
  id: '1123',
  size: {
    width: 20,
    height: 30
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// === interaction with classes ===

interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()
  
  setTime(date: Date) {
    this.time = date
  }
}

// === 

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black', 
  marginTop: '2px',
  borderRadius: '5px'
}

