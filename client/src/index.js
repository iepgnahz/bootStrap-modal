import React from 'react';
import ReactDom from 'react-dom';
import '../style/index.less';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div >
      <h2>创建模态框（Modal）</h2>
      <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">开始演示模态框</button>
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title" id="myModalLabel">模态框（Modal）标题</h4>
            </div>
            <div className="modal-body">重点请关注webpack的配置</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" className="btn btn-primary">提交更改</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);