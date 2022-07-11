export default {
  name: 'ExamIcon',
  functional: true,
  props: {
    // Material icon name
    title: {
      type: String,
      default: '',
    },
    // 文字大小
    fontSize: {
      type: [Number, String],
      default: 24,
    },
    // 文字顏色
    color: {
      type: String,
      default: 'currentColor',
    },
    // 自訂 html tag
    tag: {
      type: String,
      default: 'span',
    },
  },
  render(h, context) {
    const { title, fontSize, color, tag } = context.props;
    const style = {
      position: 'relative',
      alignSelf: 'center',
      width: '1em',
      fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
      color: color,
    };

    let data = {
      class: `exam-icon mdi mdi-${title}`,
      style: style,
    };

    return h(tag, data);
  },
};
