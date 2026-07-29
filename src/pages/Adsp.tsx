import { useState } from 'react';
import type { CSSProperties } from 'react';
import './Adsp.css';

const StarIcon = ({ style, className }: { style?: CSSProperties, className?: string }) => (
  <svg className={`red-star ${className || ''}`} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const Adsp = () => {
  const [activeSubject, setActiveSubject] = useState(1);

  return (
    <div className="adsp-container">
      <div className="adsp-tabs">
        <button className={`adsp-tab-btn ${activeSubject === 1 ? 'active' : ''}`} onClick={() => setActiveSubject(1)}>제 1과목</button>
        <button className={`adsp-tab-btn ${activeSubject === 2 ? 'active' : ''}`} onClick={() => setActiveSubject(2)}>제 2과목</button>
        <button className={`adsp-tab-btn ${activeSubject === 3 ? 'active' : ''}`} onClick={() => setActiveSubject(3)}>제 3과목</button>
      </div>

      {/* =========================================================
                             PAGE 1 
          ========================================================= */}
      {activeSubject === 1 && (
      <div className="adsp-page">
        <div className="adsp-header">
          <h1>제 1과목 - 데이터 이해</h1>
        </div>

        <div className="adsp-content">
          {/* Page 1 - Left Column */}
          <div className="adsp-col">
            
            <div className="adsp-section">
              <div className="adsp-section-title">데이터 : 추론과 추정의 근거를 이루는 사실 (사전적 정의)</div>
              <ul className="adsp-ul" style={{marginLeft: '1rem', marginBottom: '0.5rem'}}>
                <li className="bullet-none">상호관계 속에서 가치를 가질 수 있으며 추정, 예측을 위한 근거 자료</li>
              </ul>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-orange" style={{width: '30%'}}>정성적 데이터<br/><span className="text-small">(Qualitative Data)</span></th>
                    <td>. 비정형 데이터, 저장/분석 등 자료 처리에 많은 비용/시간 소요<br/>Ex. 주관식 응답 / 기상특보 / SNS 텍스트</td>
                  </tr>
                  <tr>
                    <th className="bg-green">정량적 데이터<br/><span className="text-small">(Quantitative Data)</span></th>
                    <td>. 수치 기반의 정형 데이터, 많은 자료 양에도 저장/분석 용이<br/>Ex. 온도, 습도, 강우량, 풍속</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">지식 경영 : 개인의 암묵지와 집단의 형식지 간에 상호 작용(생성/발전/전환)을 통해 지식의 발전을 기반으로 한 기업의 경영</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-green" style={{width: '20%'}}>암묵지</th>
                    <td>경험과 학습을 통해 개인에게 습득된 무형의 지식으로 <span className="highlight-text">공유 어려움</span><br/>ex. 자동차 운전, 강연, 운동</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">형식지</th>
                    <td>구체적이거나 문서화된 지식으로 <span className="blue-text">전달 및 공유 용이</span><br/>ex. 작업 매뉴얼, 설계도, 데이터베이스, 프로그램</td>
                  </tr>
                </tbody>
              </table>
              <div className="seci-model-wrapper" style={{marginTop: '0.5rem', marginBottom: '1rem'}}>
                <StarIcon />
                <table className="adsp-table seci-matrix text-center" style={{width: '100%'}}>
                  <tbody>
                    <tr>
                      <th style={{border: 'none', background: 'transparent', width: '20%'}}></th>
                      <th style={{backgroundColor: '#e3f2fd', width: '40%'}}>암묵적 지식</th>
                      <th style={{backgroundColor: '#e3f2fd', width: '40%'}}>형식적 지식</th>
                    </tr>
                    <tr>
                      <th style={{backgroundColor: '#e3f2fd'}}>암묵적 지식</th>
                      <td style={{padding: '1rem'}}>
                        <div className="blue-text font-bold" style={{marginBottom: '0.3rem'}}>① 공통화</div>
                        <div className="text-small">암묵적 노하우를 타인에게 전달</div>
                      </td>
                      <td style={{padding: '1rem'}}>
                        <div className="blue-text font-bold" style={{marginBottom: '0.3rem'}}>② 표출화</div>
                        <div className="text-small">암묵적 노하우를 책/교재 등 형식지로 전환</div>
                      </td>
                    </tr>
                    <tr>
                      <th style={{backgroundColor: '#e3f2fd'}}>형식적 지식</th>
                      <td style={{padding: '1rem'}}>
                        <div className="blue-text font-bold" style={{marginBottom: '0.3rem'}}>④ 내면화</div>
                        <div className="text-small">만들어진 교재(형식지)를 참고하여<br/>다른 직원들이 암묵적 지식으로 체화</div>
                      </td>
                      <td style={{padding: '1rem'}}>
                        <div className="blue-text font-bold" style={{marginBottom: '0.3rem'}}>③ 연결화</div>
                        <div className="text-small">기존 형식지에 자신의 새로운 지식을 추가</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">DIKW 피라미드 : 데이터, 정보, 지식을 통해 <span className="highlight-text">최종적으로 지혜</span>를 얻어내는 일련의 과정을 나타내는 계층구조</div>
              <ul className="adsp-ul">
                <li><span className="highlight-text">Data (데이터) :</span> 가공 전의 객관적인 사실 및 순수한 수치/기호<br/>
                  <span className="text-small" style={{marginLeft: '1rem'}}>→ A마트는 100원에, B마트는 300원에 연필을 판매한다.</span>
                </li>
                <li><span className="highlight-text">Information (정보) :</span> 데이터 가공 및 상관관계 속에서 패턴을 인식하고 의미를 도출<br/>
                  <span className="text-small" style={{marginLeft: '1rem'}}>→ A마트의 연필이 B마트보다 싸다.</span>
                </li>
                <li><span className="highlight-text">Knowledge (지식) :</span> 상호 연결된 정보 패턴을 이해하여 이를 토대로 예측한 결과물<br/>
                  <span className="text-small" style={{marginLeft: '1rem'}}>→ 상대적으로 저렴한 A마트에서 연필을 사야겠다.</span>
                </li>
                <li><span className="highlight-text">Wisdom (지혜) :</span> 근본 원리에 대한 깊은 이해를 바탕으로 도출되는 창의적 아이디어<br/>
                  <span className="text-small" style={{marginLeft: '1rem'}}>→ 다른 상품들도 A마트가 B마트보다 저렴할 것이라 판단한다.</span>
                </li>
              </ul>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">데이터베이스 4가지 특징</div>
              <ul className="adsp-ul">
                <li><span className="blue-text font-bold">통합 :</span> 데이터베이스 내 중복된 데이터 없음 (<span className="blue-text">중복 최소화</span>)</li>
                <li><span className="blue-text font-bold">저장 :</span> 컴퓨터가 접근 가능한 저장 매체에 데이터 저장 가능</li>
                <li><span className="blue-text font-bold">공용 :</span> 여러 사용자가 동일 데이터를 공용으로 사용 (<span className="blue-text">공동 접근</span>)</li>
                <li><span className="blue-text font-bold">변화 :</span> 추가/삭제/갱신 등의 기존 <span className="blue-text">데이터 변경 가능</span> (정확한 데이터 유지)</li>
              </ul>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">데이터 종류</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-orange" style={{width: '30%'}}>정형 데이터<br/><span className="text-small">(Structured)</span></th>
                    <td>. 행/열로 구성된 스프레드시트 형태 (관계형 데이터베이스)</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">반정형 데이터<br/><span className="text-small">(Semi-structured)</span></th>
                    <td>. 데이터 구조에 대한 메타 정보 / Parsing 활용 구조 파악<br/><span className="text-small">[Parsing : 반정형 데이터 구조 해석하여 정보 추출]</span><br/>. HTML, XML, JSON 등 웹 기반 데이터</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>비정형 데이터<br/><span className="text-small">(Unstructured)</span></th>
                    <td>. 형태 및 구조가 정형화되지 않은 데이터<br/>[사진, 영상, 소리, 텍스트 등]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">데이터베이스 구성 요소</div>
              <ul className="adsp-ul">
                <li><span className="blue-text font-bold">메타 데이터 :</span> 데이터에 대한 데이터 (데이터 특성, 구조, 의미, 관리 정보 설명)<br/>
                  <span className="text-small" style={{marginLeft: '1rem'}}>(MetaData) 데이터베이스 내 데이터에 대한 정보를 제공하거나 설명</span>
                </li>
                <li><span className="blue-text font-bold">인덱스 :</span> 데이터베이스에서 데이터 검색 및 정렬을 빠르게 수행하기 위한 자료 구조<br/>
                  <span className="text-small" style={{marginLeft: '1rem'}}>(Index)</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Page 1 - Right Column */}
          <div className="adsp-col">
            
            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">DBMS (Data-Base Management System)</div>
              <ul className="adsp-ul" style={{marginLeft: '1rem'}}>
                <li className="bullet-none">- 사용자의 요구에 따라 정보를 처리하고 데이터베이스를 관리하는 소프트웨어</li>
                <li className="bullet-none">- 장점 : 데이터의 중복 최소화, 일관성 및 무결성 유지, 모든 사용자 동시 접근 가능<br/>
                  &nbsp;&nbsp;데이터 액세스 권한 제어를 통해 민감 정보 보호, SQL 기반 언어로 제어 용이<br/>
                  &nbsp;&nbsp;타 사용자가 트랜잭션 시에도 결과 즉시 확인 가능<br/>
                  <span className="text-small blue-text">&nbsp;&nbsp;(데이터 상태를 변환시키는 일련의 연산 작업)</span>
                </li>
                <li className="bullet-none">- 단점 : 모든 데이터 문제 해결 불가, 유지/보수 비용 발생, 전문 지식/관리 필요<br/>
                  &nbsp;&nbsp;시스템 문제 발생 시 모든 데이터 영향, 새로운 버전 적용 시 호환성 문제
                </li>
              </ul>
              
              <table className="adsp-table" style={{marginTop: '0.5rem'}}>
                <tbody>
                  <tr>
                    <th style={{width: '25%'}}>RDBMS<br/><span className="text-small">(Relational DBMS)</span></th>
                    <td>. 관계형 데이터베이스 관리 시스템<br/>. 정형화된 테이블로 구성된 데이터 항목들의 집합체<br/>ex. MySQL (오픈소스 DBMS) / Oracle Database (상용 RDBMS)<br/>&nbsp;&nbsp;Microsoft SQL Server, IBM DB2, PostgreSQL, Sybase</td>
                  </tr>
                  <tr>
                    <th>ODBMS<br/><span className="text-small">(Object-oriented<br/>DBMS)</span></th>
                    <td>. 객체 지향 데이터베이스 관리 시스템<br/>. 복잡한 데이터 구조를 표현/관리<br/>. 객체를 생성하여 계층에서 체계적으로 정리하고, 상위 계층으로부터 방법과 속성을 다시 물려받음(상속)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title" style={{color: '#1565c0'}}>★ NoSQL (Non-SQL) : <span style={{color: '#333'}}>관계형 데이터베이스보다 덜 제한적인 일관성 모델 이용<br/>디자인 단순화, 수평적 확장성, 세세한 통제<br/>ex. MongoDB, Apache Hbase, Redis, Apache Cassandra</span></div>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">시대별 데이터베이스 솔루션</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th rowSpan={2} className="bg-purple" style={{width: '20%'}}>1980년대</th>
                    <td className="text-center font-bold" style={{width: '20%'}}>OLTP</td>
                    <td>. On-Line Transaction Processing / 온라인 <span className="highlight-text">거래</span> 처리<br/>. 주 컴퓨터와 연결된 사용자들의 실시간 트랜잭션 처리</td>
                  </tr>
                  <tr>
                    <td className="text-center font-bold">OLAP</td>
                    <td>. On-Line Analytical Processing / 온라인 <span className="blue-text">분석</span> 처리<br/>. 다차원의 데이터를 대화식으로 분석 및 통계 요약 정보 제공</td>
                  </tr>
                  <tr>
                    <th rowSpan={2} className="bg-purple">2000년대</th>
                    <td className="text-center font-bold">CRM</td>
                    <td>. Customer Relationship Management<br/>. 고객 이해를 바탕으로 한 마케팅 전략을 통해 <span className="highlight-text">높은 이익 창출</span></td>
                  </tr>
                  <tr>
                    <td className="text-center font-bold">SCM</td>
                    <td>. Supply Chain Management [유통망 관리]<br/>. 정보기술을 활용하여 유통 재고 및 시간/비용 최적화</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">분야별 데이터베이스 솔루션</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-yellow" style={{width: '20%'}}>ERP</th>
                    <td>. Enterprise Resource Planning<br/>. 프로세스 관리를 돕는 여러 모듈로 구성된 <span className="highlight-text">통합 애플리케이션</span></td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">RTE</th>
                    <td>. 비즈니스 프로세스를 투명하고 민첩하게 유지, 지연시간 제거, 대기업-중소기업 간 협업적 IT화</td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">BI<br/><span className="text-small">(Business Intelligence)</span></th>
                    <td>. 데이터 웨어하우스 내 데이터에 접근하여 경영 의사 결정에 필요한 정보 획득 및 활용 (데이터 통합 및 분석)<br/>. 하나의 특정 비즈니스 질문에 답변하도록 설계<br/>★ Ad Hoc Report : 특정 요구에 의해 즉각 생성된 보고서</td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">BA<br/><span className="text-small">(Business Analytics)</span></th>
                    <td>. 통계적이고 수학적인 분석에 초점 [BI보다 진보된 형태]</td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">KMS</th>
                    <td>. 지식관리시스템 / 조직 내의 지식을 체계적으로 관리하는 시스템</td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">EDW</th>
                    <td>. Enterprise Data Warehouse<br/>. 여러 애플리케이션의 비즈니스 정보를 중앙 집중화<br/>→ 조직 전체에서 분석/사용가능하도록 하는 데이터베이스</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">데이터 웨어하우스</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-green" style={{width: '25%'}}>데이터<br/>웨어하우스<br/><span className="text-small">(Data Warehouse)</span></th>
                    <td style={{position: 'relative'}}>
                      <StarIcon />
                      . 기업 내 의사결정 지원을 위한 하나의 <span className="highlight-text">통합된 데이터 저장 공간</span><br/>
                      <span className="highlight-text font-bold">[4대 특징]</span><br/>
                      ① <span className="blue-text font-bold">통합</span> : 전사적 차원에서 일관된 형식으로 정의<br/>
                      ② <span className="blue-text font-bold">시계열성</span> : 시간의 흐름에 따라 변화값 저장<br/>
                      ③ <span className="blue-text font-bold">주제 지향적</span> : 특정 주제에 따라 분류/저장/관리<br/>
                      ④ <span className="blue-text font-bold">비소멸성(비휘발성)</span> : Batch 작업에 의한 갱신 이외에 변화 X
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-green">데이터 마트<br/><span className="text-small">(Data Mart)</span></th>
                    <td>. 소규모 단일 주제의 데이터 웨어하우스 (특정 조직의 특정 업무)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '1rem', color: '#999'}}>- 1 -</div>
          </div>
        </div>
      </div>
      )}
      
      {/* =========================================================
                             PAGE 2 
          ========================================================= */}
      {activeSubject === 2 && (
      <div className="adsp-page">
        <div className="adsp-header">
          <h1>제 2과목 - 데이터 분석 기획</h1>
        </div>

        <div className="adsp-content">
          {/* Page 2 - Left Column */}
          <div className="adsp-col">
            
            <div className="adsp-section">
              <div className="adsp-section-title">분석 기획 : 분석을 수행할 과제 정의 및 관리할 수 있는 방안을 사전에 계획하는 작업</div>
              <div className="text-center" style={{marginBottom: '0.5rem'}}>→ 균형 잡힌 시각 / 데이터 프로그래밍 기술 역량 필요</div>
              
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem', position: 'relative'}}>
                <StarIcon style={{top: '0', left: '150px'}} />
                ☆ 분석 주제 유형 4가지
              </div>
              <table className="adsp-table text-center">
                <thead>
                  <tr>
                    <th style={{backgroundColor: '#e8f5e9'}}>분석 대상<br/>분석 방법</th>
                    <th style={{backgroundColor: '#e3f2fd'}}>Known</th>
                    <th style={{backgroundColor: '#e3f2fd'}}>Un-known</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th style={{backgroundColor: '#e8f5e9'}}>Known</th>
                    <td><span className="highlight-text font-bold">최적화<br/>(Optimization)</span></td>
                    <td><span className="blue-text font-bold">통찰<br/>(Insight)</span></td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#e8f5e9'}}>Un-known</th>
                    <td><span className="blue-text font-bold">솔루션<br/>(Solution)</span></td>
                    <td><span className="blue-text font-bold">발견<br/>(Discovery)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>☆ 목표 시점별 분석 기획 방안</div>
              <table className="adsp-table text-center">
                <thead>
                  <tr>
                    <th style={{backgroundColor: '#fbe9e7'}}>구 분</th>
                    <th style={{backgroundColor: '#fbe9e7'}}>과제 중심적 (단기)</th>
                    <th style={{backgroundColor: '#fbe9e7'}}>마스터 플랜 (장기)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1차 목표</td>
                    <td><span className="highlight-text">Speed & Test</span></td>
                    <td>Accuracy & Deploy</td>
                  </tr>
                  <tr>
                    <td>과제 유형</td>
                    <td><span className="blue-text font-bold">Quick-Win*</span></td>
                    <td>Long Term View</td>
                  </tr>
                  <tr>
                    <td>접근 방식</td>
                    <td>Problem Solving<br/>(문제 해결)</td>
                    <td>Problem Definition<br/>(문제 정의)</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-small" style={{marginTop: '0.2rem'}}>* Quick-Win : 단기 해결을 위한 즉각적인 실행 및 추진 방식</div>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">분석 기획 시 고려사항</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5', width: '30%'}}>가용한 데이터</th>
                    <td>. 데이터 확보 및 데이터 유형 분석 사전 시행 (정형, 반정형, 비정형)</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>적절한 유스케이스</th>
                    <td>. 기존 수립된 유사 분석 시나리오 및 솔루션 최대한 활용</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>장애 요소 확인</th>
                    <td>. 분석 방해하는 장애 요소들에 대한 사전 계획 수립 필요<br/>→ 지속적인 교육 및 활용방안을 통한 조직 역량 내재화</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">분석 방법론</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-green" style={{width: '25%'}}>폭포수</th>
                    <td>. <span className="highlight-text">선형 순차적 개발(하향식)</span> / 고전적, 전통적 개발 모형<br/>. Step-by-Step 단계마다 진행 / 문제 시 전 단계로 피드백 수행</td>
                  </tr>
                  <tr>
                    <th className="bg-green">나선형<br/>(Spiral)</th>
                    <td>. 점진적 개발 과정 반복 / 정밀하여 유지보수 과정 필요없으나<br/>효과적인 관리 체계 부재 시 복잡도 상승으로 프로젝트 진행 불가<br/>※ 계획/목표 수립 → <span className="highlight-text">위험 분석</span> → 개발 및 검증 → 고객 평가</td>
                  </tr>
                  <tr>
                    <th className="bg-green">프로토타입</th>
                    <td>. 고객 need 파악 위해 <span className="highlight-text">견본/시제품을 통해 최종 결과 예측 (상향식)</span><br/>. 불분명한 사용자 요구사항 시 일단 프로토타입 먼저 개발 후<br/>그 결과를 토대로 반복적인 개선 작업 진행</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">KDD 분석 방법론 (Knowledge Discovery in Database)</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-orange" style={{width: '25%'}}>데이터 셋 선택</th>
                    <td>. 분석에 필요한 데이터(raw data) 선택<br/>→ 분석 대상 산업 도메인의 이해와 해당 과제 목표 설정 필수</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">데이터 전처리</th>
                    <td>. 데이터의 <span className="highlight-text">노이즈, 이상값, 결측치</span> 확인 후 필요 시 제거(정제)</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">데이터 변환</th>
                    <td>. 분석 목적에 맞는 데이터 선별 및 데이터 <span className="blue-text">차원 축소</span></td>
                  </tr>
                  <tr>
                    <th className="bg-orange">데이터 마이닝</th>
                    <td>. 분석 목적에 맞는 <span className="highlight-text">데이터 마이닝 알고리즘 선택</span><br/>. 데이터 간 패턴 및 경향/예측 등 데이터 마이닝 작업 실시</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">분석 결과 평가</th>
                    <td>. 데이터 마이닝 결과에 대한 해석과 평가 진행</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">CRISP-DM 분석 방법론</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-blue" style={{width: '25%'}}>업무 이해</th>
                    <td>. 분석 과제의 목적과 요구사항 이해<br/>→ 업무 목적 파악 / 상황 파악 / 데이터 마이닝 목표 설정<br/>&nbsp;&nbsp;&nbsp;프로젝트 계획 수립</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">데이터 이해</th>
                    <td>. 분석을 위한 데이터 수집 및 이해<br/>→ 초기 데이터 수집, 데이터 기술 분석, 데이터 품질 확인</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">데이터 준비</th>
                    <td>. 수집된 데이터에서 분석 용이한 데이터만 추출 및 편성<br/>→ 데이터 셋 선택, 데이터 정제, 데이터 통합, 데이터 포맷팅</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">모델링</th>
                    <td>. 다양한 알고리즘 적용으로 모델링 수행 및 파라미터 최적화<br/>→ 데이터 분할, 모델링 기법 선택, 모델링 작성, 모델 평가</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">평가</th>
                    <td>. 수행된 모델링이 프로젝트 목적에 적절한지 평가<br/>→ 분석결과 평가, 모델링 과정 평가, 모델 적용성 평가</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">전개</th>
                    <td>. 완성된 모델을 실제 현업에 적용하기 위한 이행 계획 수립<br/>→ 전개 계획 수립, 모니터링/유지보수 계획 수립, 프로젝트 리뷰</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* Page 2 - Right Column */}
          <div className="adsp-col">
            
            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">데이터 분석 방법론</div>
              <div className="text-small" style={{marginBottom: '0.5rem'}}>- 단계(Phase), 태스크(Task), 스텝(Step) 3개의 층으로 구성</div>
              
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-yellow" style={{width: '20%'}}>분석<br/>기획<br/><div className="arrow-down">↓</div></th>
                    <td>
                      . 비즈니스 이해 및 범위 설정 / <span className="highlight-text">프로젝트 정의 및 위험(Risk) 계획 수립</span><br/>
                      * SOW (Statement of Work, 작업 기술서/명세서) :<br/>
                      &nbsp;&nbsp;고객의 요구사항 및 프로젝트 예상 결과 등을 세부적으로 기술<br/>
                      * WBS (Work Breakdown Structure, 업무 분업 구조도) :<br/>
                      &nbsp;&nbsp;전체 업무를 분류 및 계획하여 각 업무 담당자에게 업무 분할<br/>
                      → 위험 대응 방안 : <span style={{backgroundColor: '#ffeb3b', padding: '0 4px', fontWeight: 'bold'}}>회피, 전이, 완화, 수용</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">데이터<br/>준비<br/><div className="arrow-down">↓</div></th>
                    <td>
                      . 필요한 데이터 정의 / <span className="blue-text">데이터 스토어(Data store) 수립</span><br/>
                      . 데이터 수집 및 정합성 점검<br/>
                      * 웹 크롤링 : 웹 데이터의 구조 분석 후 데이터 자동 수집<br/>
                      * API : 프로그램 라이브러리 접근을 위해 정의한 규칙<br/>
                      * ETL : 데이터 추출/변환 및 데이터베이스에 적재하는 작업
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">데이터<br/>분석<br/><div className="arrow-down" style={{color: '#1565c0'}}>↓↑</div></th>
                    <td>
                      . 분석용 데이터 준비 / <span className="blue-text">텍스트 분석 / 탐색적 분석</span><br/>
                      . 데이터 분할 - 훈련용 학습데이터와 검증용 실험데이터로 분류<br/>
                      . 모델링 / 모델링 평가 및 검증<br/>
                      <span className="highlight-text">→ 추가적 데이터 확보 필요 시 데이터 준비 단계로 피드백</span><br/>
                      * EDA (Exploratory Data Analysis, 탐색적 데이터 분석) :<br/>
                      &nbsp;&nbsp;데이터셋 분석/조사하여 주요 특성을 파악하는 데에 사용
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">시스템<br/>구현<br/><div className="arrow-down">↓</div></th>
                    <td>
                      . 설계 및 구현 / 시스템 테스트 및 운영<br/>
                      . 단순 데이터 분석으로 프로젝트 종료 시 [시스템 구현] 단계 미진행
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">평가<br/>및 전개</th>
                    <td>. 모델 발전 계획 수립 / 프로젝트 평가 및 보고</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">분석 과제 도출 방법</div>
              
              <div style={{position: 'relative', marginTop: '1rem'}}>
                <StarIcon style={{top: '0'}}/>
                <div style={{fontWeight: 'bold', display: 'flex', alignItems: 'center'}}>
                  <span style={{marginRight: '0.5rem', color: '#e53935'}}>★</span> 
                  하향식 접근 : 지시된 문제(분석 대상)가 확실한 경우 체계적인 단계화로 문제 해결
                </div>
                <div className="text-center" style={{marginBottom: '0.5rem'}}>→ 분석 주제 유형이 '<span className="highlight-text">최적화</span>' 및 '<span className="blue-text">솔루션</span>' 일 때</div>
                
                <table className="adsp-table">
                  <tbody>
                    <tr>
                      <th className="bg-green" style={{width: '25%'}}>①문제 탐색</th>
                      <td>
                        . 비즈니스 모델 기반 문제 탐색<br/>
                        → 비즈니스 모델 캔버스 활용 [9가지 블록을 <span className="highlight-text">5가지</span>로 단순화]<br/>
                        <div className="text-small text-center" style={{color: '#1565c0'}}>업무, 제품, 고객, 지원인프라, 규제/감사</div>
                        ※ 거시적 관점 : STEEP (사회, 기술, 경제, 환경, 정치)<br/>
                        &nbsp;&nbsp;경쟁자 확대 관점 : 대체자, 경쟁자, 신규 진입자<br/>
                        &nbsp;&nbsp;시장니즈 탐색 관점 : 고객, 채널, 영향자<br/>
                        . 외부 참조 모델 기반 문제 탐색 (외부 사례 벤치마킹)<br/>
                        . 분석 유즈 케이스 (데이터 분석 문제로 전환)
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-green">②문제 정의</th>
                      <td>
                        . 비즈니스 문제를 데이터 분석 문제로 변환<br/>
                        → 해결하기 위한 데이터 및 방법(How)을 정의하기 위한 목적
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-green">③해결방안<br/>탐색</th>
                      <td>
                        . 수행 옵션 도출<br/>
                        <table className="adsp-table text-center text-small" style={{marginTop: '0.5rem'}}>
                          <thead>
                            <tr>
                              <th style={{backgroundColor: '#eee'}}>분석 역량<br/>분석 기법</th>
                              <th style={{backgroundColor: '#eee'}}>확보</th>
                              <th style={{backgroundColor: '#eee'}}>미확보</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>기존 시스템</td>
                              <td>기존 시스템 개선</td>
                              <td>교육/채용 통한 역량 확보</td>
                            </tr>
                            <tr>
                              <td>신규 도입</td>
                              <td>시스템 고도화</td>
                              <td>전문 업체</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <th className="bg-green">④타당성 검토</th>
                      <td>. 타당성 평가 및 과제 선정<br/>(비용 대비 편익 / 데이터 존재 여부 / 분석 시스템 환경)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{position: 'relative', marginTop: '1.5rem'}}>
                <StarIcon style={{top: '0'}}/>
                <div style={{fontWeight: 'bold', display: 'flex', alignItems: 'center'}}>
                  <span style={{marginRight: '0.5rem', color: '#e53935'}}>★</span> 
                  상향식 접근 : 문제 정의 자체가 어려운 경우 데이터 기반으로 문제 탐색 / 지속 개선
                </div>
                <div style={{paddingLeft: '1.5rem', marginBottom: '0.5rem'}}>
                  → 분석 주제 유형이 '<span className="blue-text">통찰</span>' 및 '<span className="blue-text">발견</span>' 일 때 (What 관점)<br/>
                  → 인사이트 도출 후 반복적 시행착오를 통한 문제 도출<br/>
                  → <span className="highlight-text">비지도 학습</span> 방법에 의해 수행
                </div>
                
                <table className="adsp-table text-center" style={{marginLeft: '1.5rem', width: 'calc(100% - 1.5rem)'}}>
                  <thead>
                    <tr>
                      <th style={{backgroundColor: '#fbe9e7'}}>지도 학습<br/><span className="text-small">(Supervised Learning)</span></th>
                      <th style={{backgroundColor: '#fbe9e7'}}>비지도 학습<br/><span className="text-small">(Unsupervised Learning)</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="blue-text">명확한</span> input / output</td>
                      <td><span className="blue-text">불명확한</span> input / output</td>
                    </tr>
                    <tr>
                      <td>예측 (Regression)</td>
                      <td>연관 (Association)</td>
                    </tr>
                    <tr>
                      <td>분류 (Classification)</td>
                      <td>군집화 (Clustering)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="adsp-section">
              <div style={{fontWeight: 'bold'}}>. 디자인 사고(Thinking) : 상향식 접근 '발산' 단계 + 하향식 접근 '수렴' 단계 통합 적용</div>
              <div className="text-center font-bold" style={{color: '#555'}}>공감 → 문제정의 → 아이디어 도출 → 프로토타입 → 테스트</div>
            </div>
            
            <div className="adsp-section" style={{marginTop: '0.5rem'}}>
              <div style={{fontWeight: 'bold'}}>. Self Service Analytics</div>
              <div style={{paddingLeft: '0.5rem'}}>- BI도구, Ad hoc report, OLA, Visual Discovery, Machine Learning 기능 포함</div>
              <div style={{paddingLeft: '0.5rem'}}>- R, Python 등의 데이터 분석 언어와 많은 통계적 지식 필요 (분산처리 지원 없음)</div>
            </div>

            <div style={{textAlign: 'center', marginTop: '1rem', color: '#999'}}>- 3 -</div>
          </div>
        </div>
      </div>
      )}
      
      {/* =========================================================
                             PAGE 3 
          ========================================================= */}
      {activeSubject === 3 && (
        <>
      <div className="adsp-page">
        <div className="adsp-header">
          <h1>제 3과목. 데이터 분석</h1>
        </div>

        <div className="adsp-content">
          {/* Page 3 - Left Column */}
          <div className="adsp-col">
            
            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">상자그림 (Boxplot) 해석</div>
              
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 0', position: 'relative'}}>
                {/* Simplified SVG representation of the boxplot */}
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px'}}>
                  <div style={{color: '#999', fontSize: '0.8rem'}}>IQR (Interquartile range)<br/>= Q3 - Q1</div>
                </div>
                <svg width="250" height="200" viewBox="0 0 250 200">
                  {/* Outlier */}
                  <circle cx="50" cy="20" r="4" fill="none" stroke="#1565c0" strokeWidth="2" />
                  <line x1="50" y1="20" x2="100" y2="20" stroke="#1565c0" strokeWidth="1" strokeDasharray="4" />
                  <text x="110" y="24" fontSize="12" fill="currentColor">이상치</text>
                  
                  {/* Upper Bound */}
                  <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2" />
                  <line x1="50" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
                  <line x1="50" y1="50" x2="100" y2="50" stroke="#e53935" strokeWidth="1" />
                  <text x="110" y="44" fontSize="12" fill="currentColor">이상치 경계 (Q3 + 1.5 x IQR)</text>
                  <text x="110" y="58" fontSize="12" fill="currentColor">최대값 (Max, 이상치 제외)</text>
                  
                  {/* Box */}
                  <rect x="35" y="80" width="30" height="60" fill="#fbc02d" opacity="0.6" stroke="currentColor" strokeWidth="1"/>
                  <line x1="35" y1="110" x2="65" y2="110" stroke="currentColor" strokeWidth="2"/>
                  
                  {/* Q3 */}
                  <line x1="65" y1="80" x2="100" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2"/>
                  <text x="110" y="84" fontSize="12" fill="currentColor">Q3 (75%)</text>
                  
                  {/* Q2 */}
                  <line x1="65" y1="110" x2="100" y2="110" stroke="currentColor" strokeWidth="1" strokeDasharray="2"/>
                  <text x="110" y="114" fontSize="12" fill="currentColor">Q2 (50%, median)</text>
                  
                  {/* Q1 */}
                  <line x1="65" y1="140" x2="100" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="2"/>
                  <text x="110" y="144" fontSize="12" fill="currentColor">Q1 (25%)</text>
                  
                  {/* Lower Bound */}
                  <line x1="50" y1="140" x2="50" y2="170" stroke="currentColor" strokeWidth="2" />
                  <line x1="30" y1="170" x2="70" y2="170" stroke="currentColor" strokeWidth="2" />
                  <line x1="70" y1="170" x2="100" y2="170" stroke="currentColor" strokeWidth="1" />
                  <text x="110" y="174" fontSize="12" fill="currentColor">최소값 (Min, 이상치 제외)</text>
                  
                  <line x1="50" y1="190" x2="100" y2="190" stroke="#e53935" strokeWidth="1" />
                  <text x="110" y="194" fontSize="12" fill="currentColor">이상치 경계 (Q1 - 1.5 x IQR)</text>
                  
                  {/* IQR Arrow */}
                  <line x1="15" y1="80" x2="15" y2="140" stroke="currentColor" strokeWidth="1" />
                  <polygon points="15,80 12,85 18,85" fill="currentColor" />
                  <polygon points="15,140 12,135 18,135" fill="currentColor" />
                </svg>
              </div>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">결측값 (Missing Value)</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem', marginBottom: '0.5rem'}}>
                <li className="bullet-none">- 데이터 값이 없는 데이터 (null or NA), 관측되지 않는 특정 확률변수의 값</li>
                <li className="bullet-none">- <span className="highlight-text">반드시 제거하는게 아니라</span> 상황에 따라 제거 여부 판단</li>
              </ul>
              
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-yellow" style={{width: '25%'}}>단순 삭제</th>
                    <td>결측값을 가진 불완전 데이터 제거 (Completes case analysis)<br/>→ 효율성 상실 및 통계적 추론의 타당성 문제 존재</td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">평균 대치법</th>
                    <td>. 비조건부 : 데이터의 평균으로 결측값을 대치<br/>. 조건부 : 회귀분석 활용</td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">단순 확률 대치법</th>
                    <td>평균 대치법의 추정량 표준오차의 과소 추정 문제 보안 목적으로<br/>결측값 대치할 때 적절한 확률값을 부여한 후 대치<br/>→ Hot-deck / K Nearest Neighbor (KNN) 모델 활용</td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">다중 대치법</th>
                    <td>단순 대치법을 여러번(m번) 시행 (대치→분석→결합)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">이상값 (Outlier)</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem', marginBottom: '0.5rem'}}>
                <li className="bullet-none">- 극단적으로 크거나 작은 값 (정형 데이터보다 반정형/비정형 데이터에서 주로 발생)</li>
                <li className="bullet-none">- <span className="highlight-text">반드시 제거해야 하는 것은 아님</span> → 분석 목적/종류에 따라 전문가의 판단 필요</li>
              </ul>
              
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-green" style={{width: '25%'}}>ESD</th>
                    <td>. Extreme Studentized Deviation<br/>. 평균으로부터 <span className="blue-text font-bold">표준편차의 3배(3σ)</span>를 벗어나는 데이터<br/>&nbsp;&nbsp;μ - 3σ {'<'} 정상 데이터 {'<'} μ + 3σ</td>
                  </tr>
                  <tr>
                    <th className="bg-green">사분위수</th>
                    <td>. Q1 및 Q3에서 각각 <span className="blue-text font-bold">IQR의 1.5배</span> 벗어나는 데이터<br/>&nbsp;&nbsp;(Q1 - 1.5xIQR) {'<'} 정상 데이터 {'<'} (Q3 + 1.5xIQR)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">확률적 표본추출법</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-orange" style={{width: '25%'}}>무작위 추출</th>
                    <td>무작위로 표본 추출 (표본 선택 확률 모두 동일)</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">계통 추출</th>
                    <td>일련번호 (1, 2, …, n) 부여 후 <span className="highlight-text font-bold">일정 간격</span>으로 표본 선택</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">층화 추출</th>
                    <td>모집단을 서로 중복되지 않는 집단 및 층(strata)으로 구분하고<br/>각 집단 내에서 표본을 <span className="highlight-text font-bold">무작위 추출</span> (ex. 성별, 나이, 지역)</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">군집 추출</th>
                    <td>모집단을 서로 동질적인 집단으로 나누고, 몇 개의 집단들을 선택 후<br/>해당 집단 내에서 표본을 임의로 선택 (ex. 같은 학년 내 반)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section" style={{marginTop: '1rem'}}>
              <div style={{fontWeight: 'bold', fontSize: '0.9rem'}}>※ 표본추출 관련 오차</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem', fontSize: '0.85rem'}}>
                <li className="bullet-none font-bold">. 표본 오차 : 표본의 낮은 대표성으로 표본으로 선택되지 않은 데이터들로 인한 오차</li>
                <li className="bullet-none" style={{paddingLeft: '1.5rem'}}>→ 표본의 크기가 커질수록, 즉 전체 데이터를 대변할수록, 표본 오차는 0으로 수렴</li>
                <li className="bullet-none font-bold">. 비표본 오차 : 표본 오차 이외의 발생가능한 모든 오차</li>
                <li className="bullet-none" style={{paddingLeft: '1.5rem'}}>→ 데이터 수집, 조사, 분석 과정 <span className="highlight-text font-bold">(표본 크기 커질수록 비표본 추출 오차도 커짐)</span></li>
                <li className="bullet-none">cf. 표본 편의 (Sampling Bias) : 일부 데이터만의 특성이 극단적으로 반영된 표본</li>
                <li className="bullet-none" style={{paddingLeft: '1.5rem'}}>→ <span className="blue-text font-bold">확률화(Randomization)</span> 과정을 통해 최소화 또는 제거 가능</li>
              </ul>
            </div>

          </div>

          {/* Page 3 - Right Column */}
          <div className="adsp-col">
            
            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">자료의 척도</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th style={{backgroundColor: '#fbe9e7', width: '25%'}}>명목척도</th>
                    <td>측정 대상의 특성을 분류 (ex. 성별 / 지역 / 학교), <span className="highlight-text font-bold">순위(서열) 없음</span></td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f3e5f5'}}>서열(순위)척도</th>
                    <td>높고 낮음의 서열관계가 존재할 뿐 양적 비교는 불가<br/>(ex. 학년, 점수, 만족도)</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#e8f5e9'}}>등간(구간)척도</th>
                    <td>부여된 순위 간 간격이 동일 / <span className="blue-text font-bold">양적 비교 가능 (덧셈, 뺄셈)</span><br/>(ex. 온도, 물가지수, IQ → 절대적 기준 0이 존재 불가)</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#fff9c4'}}>비율척도</th>
                    <td>절대적 기준 0이 존재하며 <span className="blue-text font-bold">비율 계산 가능 (사칙연산)</span><br/>(ex. 무게, 나이, 거리)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">기초 통계 용어</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-blue" style={{width: '25%'}}>평균 (Mean)</th>
                    <td>. 데이터의 전체 합을 개수로 나눈 값<br/>&nbsp;&nbsp;μ = (x₁ + x₂ + x₃ + … + xₙ) / n</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">중앙값 (Median)</th>
                    <td>. 데이터를 크기 순으로 나열했을 때 중앙에 위치하는 값<br/>&nbsp;&nbsp;→ 짝수 개일 때, 중앙 2개의 값의 평균을 중앙값으로 계산</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">최빈값 (Mode)</th>
                    <td>. 가장 많이 나오는 값 (1개 이상일 수 있음)</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">(모)분산</th>
                    <td>. 데이터가 퍼져있는 정도 (σ², 편차 제곱의 평균) - Σ(xᵢ-μ)² / n</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">표준편차</th>
                    <td>. 분산의 제곱근 값 = √σ² = σ</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">표본분산</th>
                    <td>. 모분산 계산식에서 n 대신 n-1을 나눔 = Σ(xᵢ-x̄)² / (n-1)</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">표준오차<br/><span className="text-small">(Standard Error)</span></th>
                    <td>. 표본 집단의 평균값과 모집단의 평균값 간의 차이<br/>. 표준오차 = σ / √n → 데이터 수(n)가 클수록 표준오차는 작아짐</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">공분산 (COV)</th>
                    <td>. 두 개의 확률변수의 선형 상관관계 정도 (최대/최소 없음)<br/>&nbsp;&nbsp;→ 0 : 상관관계 없음 / {'>'} 1 : 양의 상관관계 / {'<'} 0 : 음의 상관관계<br/>. 두 확률변수 X, Y가 독립이면 공분산 COV(X, Y)는 0 (<span className="highlight-text font-bold">역은 성립 X</span>)<br/>&nbsp;&nbsp;▶ COV(X, Y) = E[(X-E[X])(Y-E[Y])]</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">상관계수</th>
                    <td>. 두 변수 사이의 특정 상관관계 지수<br/>. -1 ~ 1 사이의 값 존재 (1 : 정비례 / -1 : 반비례)<br/>※ 높은 상관계수가 높은 인과관계를 대변하진 않음</td>
                  </tr>
                  <tr>
                    <th className="bg-blue">Z-score</th>
                    <td>. 데이터의 평균으로부터 떨어진 정도를 나타내는 척도 (표준화)<br/>&nbsp;&nbsp;▶ Z = (x - m) / σ  (m: 평균 / σ: 표준편차)</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-small" style={{marginTop: '0.2rem'}}>※ 근원사건 : 표본 공간 내에 원소가 한 개만 존재하는 사건 (표본의 최소 단위)</div>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">첨도 : 자료 분포가 얼마나 뾰족하고 완만하지 나타내는 정도 (중앙에 몰린 정도)</div>
              <div className="graph-container" style={{padding: '0 1rem'}}>
                <svg width="250" height="150" viewBox="0 0 250 150">
                  <path d="M 20 140 Q 125 140 125 20 Q 125 140 230 140" fill="none" stroke="#e53935" strokeWidth="2" />
                  <path d="M 20 140 Q 125 140 125 70 Q 125 140 230 140" fill="none" stroke="#1565c0" strokeWidth="2" />
                  <path d="M 20 140 Q 125 140 125 110 Q 125 140 230 140" fill="none" stroke="#2e7d32" strokeWidth="2" />
                  <text x="140" y="30" fontSize="12" fill="#e53935">첨도 {'>'} 0</text>
                  <text x="150" y="75" fontSize="12" fill="#1565c0">첨도 = 0 (정규분포 형태)</text>
                  <text x="160" y="115" fontSize="12" fill="#2e7d32">첨도 {'<'} 0</text>
                  <line x1="10" y1="140" x2="240" y2="140" stroke="black" strokeWidth="1" />
                </svg>
              </div>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">왜도 : 자료 분포의 비대칭 정도 (0 : 좌우 대칭관계)</div>
              <div className="blue-text font-bold" style={{paddingLeft: '1rem', fontSize: '0.9rem'}}>★ 평균값은 꼬리의 방향에 따라감</div>
              
              <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '1rem'}}>
                <div style={{textAlign: 'center'}}>
                  <svg width="150" height="120" viewBox="0 0 150 120">
                    <path d="M 10 100 Q 20 10 50 10 Q 100 10 140 100" fill="none" stroke="#1565c0" strokeWidth="2" />
                    <line x1="0" y1="100" x2="150" y2="100" stroke="black" strokeWidth="1" />
                    
                    <line x1="40" y1="10" x2="40" y2="100" stroke="#e53935" strokeWidth="1" strokeDasharray="3" />
                    <text x="40" y="8" fontSize="10" fill="#e53935" textAnchor="middle">최빈값</text>
                    
                    <line x1="60" y1="20" x2="60" y2="100" stroke="black" strokeWidth="1" strokeDasharray="3" />
                    <text x="60" y="0" fontSize="10" textAnchor="middle">중앙값</text>
                    
                    <line x1="80" y1="40" x2="80" y2="100" stroke="#2e7d32" strokeWidth="1" strokeDasharray="3" />
                    <text x="80" y="38" fontSize="10" fill="#2e7d32" textAnchor="middle">평균값</text>
                    
                    <text x="120" y="80" fontSize="12" fontWeight="bold">꼬리</text>
                  </svg>
                  <div className="font-bold" style={{marginTop: '5px'}}>왜도 {'>'} 0</div>
                  <div className="text-small" style={{color: '#2e7d32'}}>평균값 {'>'} 중앙값 {'>'} 최빈값</div>
                </div>
                
                <div style={{textAlign: 'center'}}>
                  <svg width="150" height="120" viewBox="0 0 150 120">
                    <path d="M 10 100 Q 50 10 100 10 Q 130 10 140 100" fill="none" stroke="#1565c0" strokeWidth="2" />
                    <line x1="0" y1="100" x2="150" y2="100" stroke="black" strokeWidth="1" />
                    
                    <line x1="70" y1="40" x2="70" y2="100" stroke="#2e7d32" strokeWidth="1" strokeDasharray="3" />
                    <text x="70" y="38" fontSize="10" fill="#2e7d32" textAnchor="middle">평균값</text>
                    
                    <line x1="90" y1="20" x2="90" y2="100" stroke="black" strokeWidth="1" strokeDasharray="3" />
                    <text x="90" y="0" fontSize="10" textAnchor="middle">중앙값</text>
                    
                    <line x1="110" y1="10" x2="110" y2="100" stroke="#e53935" strokeWidth="1" strokeDasharray="3" />
                    <text x="110" y="8" fontSize="10" fill="#e53935" textAnchor="middle">최빈값</text>
                  </svg>
                  <div className="font-bold" style={{marginTop: '5px'}}>왜도 {'<'} 0</div>
                  <div className="text-small" style={{color: '#e53935'}}>최빈값 {'>'} 중앙값 {'>'} 평균값</div>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '1rem', color: '#999'}}>- 5 -</div>
          </div>
        </div>
      </div>
      
      {/* =========================================================
                             PAGE 4 
          ========================================================= */}
      <div className="adsp-page">
        <div className="adsp-header">
          <h1>제 3과목. 데이터 분석</h1>
        </div>

        <div className="adsp-content">
          {/* Page 4 - Left Column */}
          <div className="adsp-col">
            
            <div className="adsp-section">
              <div className="adsp-section-title">상관분석의 유형</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-green" style={{width: '20%'}}>피어슨</th>
                    <td>양적척도(등간/비율척도) / 연속형 변수 / 두 변수 간의 <span className="highlight-text font-bold">선형관계</span> 측정</td>
                  </tr>
                  <tr>
                    <th className="bg-green">스피어만</th>
                    <td>서열척도 / 순서형 / 연속형 / 이산형 변수<br/>→ 원시 데이터가 아닌 각 변수에 대해 순위를 매긴 값을 기반<br/>비선형 관계 측정 가능 / 선형 여부 상관없이 <span className="blue-text font-bold">단조적 관계</span> 여부 확인</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">다중공선성 (Multicollinearity)</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem', marginBottom: '0.5rem', fontSize: '0.85rem'}}>
                <li className="bullet-none">- 회귀분석에서 <span className="highlight-text font-bold">독립변수 간에 강한 상관관계</span>가 나타나는 문제</li>
                <li className="bullet-none">- 일부 설명 변수가 다른 설명 변수와 높은 상관관계로 데이터 분석에 부정적 영향을 줌<br/>
                  &nbsp;&nbsp;(ex. 독립변수 : ① 혈중 알코올 농도 / ② 일평균 음주량 → 종속변수 : 학업 성적)
                </li>
                <li className="bullet-none">- 표본의 크기가 적으면 독립변수 간 상관관계 파악이 어려워 다중공선성 발생가능 높음</li>
                <li className="bullet-none">- VIF (Variance Inflation Factor): 독립변수 간 상관관계 측정 지표</li>
                <li className="bullet-none" style={{fontWeight: 'bold'}}>→ <span style={{textDecoration: 'underline'}}>높은 상관관계를 갖는 설명변수를 모형에서 제거</span>하여 해결 가능<br/>
                  <span className="text-small font-normal" style={{marginLeft: '1rem'}}>[ex. 다차원 척도법 / 주성분 분석]</span>
                </li>
              </ul>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">다차원 척도법 (MDS: Multi-Dimensional Scaling)</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem', fontSize: '0.85rem'}}>
                <li className="bullet-none">- 데이터(개체)들 간의 유사성/근접성을 시각화하는 통계 방법<br/>
                  <span className="blue-text font-bold">→ 다차원의 데이터를 저차원(2 or 3차원) 공간상에 점으로 표현하는 방법</span>
                </li>
                <li className="bullet-none">- 개체 간의 거리 표현 (유클리드 거리 / 유사도)</li>
                <li className="bullet-none">- 스트레스(Stress): 객체 간 적합 정도 수치화 → <span style={{textDecoration: 'underline'}}>0에 가까울수록 높은 적합도</span></li>
                <li className="bullet-none">. 계량적 MDS : 양적척도 (구간/비율척도)인 경우</li>
                <li className="bullet-none">. 비계량적 MDS : 순서척도인 경우</li>
              </ul>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">주성분 분석 (PCA) <span style={{fontWeight: 'normal'}}>→ 비지도 학습</span></div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem', fontSize: '0.85rem'}}>
                <li className="bullet-none">- 상관관계가 <span className="highlight-text font-bold">높은 변수</span>들의 선형결합을 통해 <span className="blue-text font-bold">차원을 축소하여 변수를 축약</span> (차원 축소)</li>
                <li className="bullet-none">- 분산을 극대화하는(=설명력이 높은) 축을 주성분으로 하여 변수를 축약</li>
                <li className="bullet-none">. 첫번째 주성분: 전체 변동을 가장 많이 설명하는 축 [<span style={{border: '1px solid #ccc', padding: '1px 3px'}}>가장 큰 분산</span>]</li>
                <li className="bullet-none">. 두번째 주성분: 첫번째 주성분과 낮은 상관성으로 나머지 변동을 가장 많이 설명 가능</li>
              </ul>
              
              <div style={{fontWeight: 'bold', marginTop: '0.5rem', marginLeft: '0.5rem', fontSize: '0.9rem'}}>[주성분 선택법]</div>
              <ul className="adsp-ul" style={{marginLeft: '1rem', fontSize: '0.85rem'}}>
                <li className="bullet-none">- <span className="blue-text font-bold" style={{textDecoration: 'underline'}}>누적기여율(누적분산비율)</span>이 <span className="highlight-text font-bold">70~90%</span> 사이의 주성분의 수로 결정 가능<br/>
                  &nbsp;&nbsp;→ 전체변이 공헌도
                </li>
                <li className="bullet-none">- 고유값(Eigenvalue)이 1보다 큰 주성분만 사용 또는 <span className="highlight-text font-bold">평균고유값 이상의 주성분</span></li>
                <li className="bullet-none">- <span className="blue-text font-bold">Scree plot 활용</span>해 고유값이 <span className="highlight-text font-bold" style={{textDecoration: 'underline'}}>수평을 유지하기 직전</span>의 주성분의 수 결정<br/>
                  &nbsp;&nbsp;→ 그래프의 기울기가 완만해지는 지점
                </li>
              </ul>
              
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <div style={{width: '200px', height: '120px', border: '1px solid #ddd', padding: '10px', position: 'relative'}}>
                  <div style={{textAlign: 'center', fontSize: '0.8rem', fontWeight: 'bold'}}>Scree Plot</div>
                  <svg width="180" height="90" viewBox="0 0 180 90">
                    <line x1="20" y1="80" x2="170" y2="80" stroke="black" strokeWidth="1"/>
                    <line x1="20" y1="10" x2="20" y2="80" stroke="black" strokeWidth="1"/>
                    
                    {/* Points */}
                    <circle cx="30" cy="20" r="2" fill="#1565c0" />
                    <circle cx="45" cy="50" r="2" fill="#1565c0" />
                    <circle cx="60" cy="65" r="2" fill="#1565c0" />
                    <circle cx="75" cy="72" r="2" fill="#1565c0" />
                    <circle cx="90" cy="75" r="2" fill="none" stroke="#1565c0" />
                    <circle cx="105" cy="76" r="2" fill="none" stroke="#1565c0" />
                    <circle cx="120" cy="76" r="2" fill="none" stroke="#1565c0" />
                    <circle cx="135" cy="77" r="2" fill="none" stroke="#1565c0" />
                    
                    {/* Line */}
                    <path d="M 30 20 L 45 50 L 60 65 L 75 72 L 90 75 L 105 76 L 120 76 L 135 77" fill="none" stroke="#1565c0" strokeWidth="1" />
                    
                    {/* Dashed Line */}
                    <line x1="20" y1="75" x2="170" y2="75" stroke="#e53935" strokeDasharray="3" />
                  </svg>
                  <div style={{transform: 'rotate(-90deg)', transformOrigin: 'left top', position: 'absolute', top: '100px', left: '5px', fontSize: '0.6rem'}}>Eigenvalue</div>
                  <div style={{textAlign: 'center', fontSize: '0.6rem', marginTop: '-5px'}}>Component Number</div>
                </div>
                <div style={{fontSize: '0.8rem', marginLeft: '10px'}}>
                  → 그래프의 기울기가 4~5 구간에서 완만<br/>
                  직전인 3까지 하여 <span className="blue-text font-bold">주성분 개수는 3개</span>
                </div>
              </div>
              
              <div style={{fontWeight: 'bold', marginTop: '1rem', marginLeft: '0.5rem', fontSize: '0.9rem'}}>※ 바이플롯 (Biplot)</div>
              <ul className="adsp-ul" style={{marginLeft: '1rem', fontSize: '0.85rem'}}>
                <li className="bullet-none">- 첫번째 주성분 (x축) / 두번째 주성분 (y축)을 하나의 2차원 그래프로 표현</li>
                <li className="bullet-none">- 각 주성분 축과 <span className="highlight-text font-bold">평행할수록</span> 해당 주성분과 영향력이 높음</li>
                <li className="bullet-none">- <span className="highlight-text font-bold">화살표의 길이가 길수록</span> 분산이 큼</li>
              </ul>
              
              <div style={{display: 'flex', alignItems: 'center', marginTop: '0.5rem'}}>
                <div style={{width: '180px', height: '150px', position: 'relative'}}>
                  <svg width="180" height="150" viewBox="0 0 180 150">
                    <line x1="90" y1="10" x2="90" y2="130" stroke="black" strokeWidth="1"/>
                    <line x1="20" y1="80" x2="160" y2="80" stroke="black" strokeWidth="1"/>
                    <text x="80" y="145" fontSize="10" fontWeight="bold">PC1</text>
                    <text x="0" y="85" fontSize="10" fontWeight="bold">PC2</text>
                    
                    {/* Vectors */}
                    <line x1="90" y1="80" x2="60" y2="30" stroke="#e53935" strokeWidth="2" />
                    <polygon points="60,30 65,35 55,35" fill="#e53935" transform="rotate(-30 60 30)" />
                    <text x="50" y="25" fontSize="10" fill="#e53935">A</text>
                    
                    <line x1="90" y1="80" x2="40" y2="50" stroke="#e53935" strokeWidth="2" />
                    <polygon points="40,50 48,50 43,58" fill="#e53935" transform="rotate(30 40 50)" />
                    <text x="30" y="45" fontSize="10" fill="#e53935">B</text>
                    
                    <line x1="90" y1="80" x2="70" y2="120" stroke="#e53935" strokeWidth="2" />
                    <polygon points="70,120 75,115 65,115" fill="#e53935" transform="rotate(-150 70 120)" />
                    <text x="60" y="130" fontSize="10" fill="#e53935">C</text>
                    
                    {/* Points */}
                    <circle cx="40" cy="90" r="2" fill="#1565c0" />
                    <text x="30" y="95" fontSize="8">1</text>
                    <circle cx="70" cy="100" r="2" fill="#1565c0" />
                    <text x="60" y="105" fontSize="8">2</text>
                    <circle cx="80" cy="40" r="2" fill="#1565c0" />
                    <text x="75" y="35" fontSize="8">3</text>
                    <circle cx="100" cy="90" r="2" fill="#1565c0" />
                    <text x="105" y="95" fontSize="8">4</text>
                    <circle cx="110" cy="60" r="2" fill="#1565c0" />
                    <text x="105" y="55" fontSize="8">5</text>
                    <circle cx="130" cy="65" r="2" fill="#1565c0" />
                    <text x="135" y="60" fontSize="8">6</text>
                    <circle cx="120" cy="110" r="2" fill="#1565c0" />
                    <text x="125" y="115" fontSize="8">7</text>
                  </svg>
                </div>
                <div style={{fontSize: '0.8rem', marginLeft: '10px'}}>
                  . <span className="highlight-text font-bold">A와 B는 서로 가까워 높은 상관관계</span><br/>
                  . 데이터 1은 B에 가장 큰 영향을 받음<br/>
                  . PC1과의 영향력 비교 : B {'>'} A {'>'} C<br/>
                  . PC2와의 영향력 비교 : C {'>'} A {'>'} B
                </div>
              </div>
            </div>

          </div>

          {/* Page 4 - Right Column */}
          <div className="adsp-col">
            
            <div className="adsp-section box-layout">
              <div className="text-center font-bold" style={{marginBottom: '1rem'}}>[예시 - 주성분 분석] <span className="highlight-text" style={{marginLeft: '2rem'}}>주성분 총 4개</span></div>
              
              <pre style={{fontFamily: 'monospace', fontSize: '0.8rem', margin: '0', textAlign: 'center'}}>
                {"                     "}PC1     PC2     PC3     PC4<br/>
                Standard deviation   1.5749  0.9949  0.5714  0.4156<br/>
                Proportion of Variance 0.6201  0.2474  0.0891  0.0433<br/>
                <span className="blue-text" style={{textDecoration: 'underline'}}>Cumulative Proportion 0.6201  0.8675  0.9566  1.0000</span>
              </pre>
              <div style={{display: 'flex', justifyContent: 'center', marginTop: '0.5rem', marginBottom: '0.5rem'}}>
                <div style={{display: 'flex', gap: '30px', paddingLeft: '90px'}}>
                  <div style={{color: '#1565c0'}}>↓</div>
                  <div style={{color: '#1565c0'}}>↓</div>
                  <div style={{color: '#1565c0'}}>↓</div>
                  <div style={{color: '#1565c0'}}>↓</div>
                </div>
              </div>
              <pre style={{fontFamily: 'monospace', fontSize: '0.8rem', margin: '0', textAlign: 'center'}}>
                {"          "}누적 기여율    62.01%  86.75%  95.66%  100%
              </pre>
              
              <ul className="adsp-ul" style={{marginTop: '1rem', fontSize: '0.85rem'}}>
                <li className="bullet-none">. 80% 이상 설명 필요 시 주성분은 <span className="highlight-text font-bold">최소 2개가 필요</span> (PC2 : 86.75%)</li>
                <li className="bullet-none">. 90% 이상 설명 필요 시 주성분은 최소 3개가 필요 (PC3 : 95.66%)</li>
              </ul>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">시계열 분석 : 시간의 흐름에 따라 관측한 데이터로 미래 데이터 분석 (물가, 기온)</div>
              <div className="text-center" style={{marginBottom: '0.5rem'}}>→ 시계열 예측을 위해서 '<span className="highlight-text font-bold">정상성</span>'을 만족해야 함</div>
              
              <div style={{position: 'relative'}}>
                <StarIcon style={{top: '0'}} />
                <div style={{fontWeight: 'bold', fontSize: '0.9rem', marginLeft: '1rem'}}>※ 정상성 (Stationary)</div>
                <ul className="adsp-ul" style={{marginLeft: '1.5rem', fontSize: '0.85rem'}}>
                  <li className="bullet-none">- <span style={{textDecoration: 'underline', color: '#e53935'}}>시계열의 평균과 분산이 모든 시점에서 일정하고</span> 특정한 추세가 존재하지 않는 성질</li>
                  <li className="bullet-none">- 분석 시점과 무관하게 과거/현재/미래 모두 안정적이며 일정한 분포를 가짐</li>
                  <li className="bullet-none">- 공분산은 시점에 의존하지 않고, 시차에만 의존</li>
                </ul>
              </div>
              
              <div style={{border: '1px solid #ccc', padding: '0.5rem', marginTop: '1rem', fontSize: '0.85rem'}}>
                <div className="font-bold">[정상시계열 변환 방법]</div>
                <ul className="adsp-ul" style={{marginLeft: '0.5rem'}}>
                  <li className="bullet-none">- 차분 : 현 시점의 자료에서 이전 시점의 자료 값을 <span className="highlight-text font-bold">빼 줌</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;= t 시점과 t-1 시점의 값 차이 (Δyₜ = yₜ - yₜ₋₁)
                  </li>
                  <li className="bullet-none">- 로그변환 : 데이터의 로그함수 취하여 <span className="blue-text font-bold">데이터 변동을 조절</span></li>
                </ul>
                <div style={{color: '#555', marginTop: '0.5rem'}}>※ 평균이 일정하지 않으면 <span className="font-bold">차분을</span>, 분산이 일정하지 않으면 <span className="font-bold">변환을</span> 사용</div>
              </div>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">시계열 모형</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-yellow" style={{width: '25%'}}>자기회귀 모형<br/>(AR)</th>
                    <td>
                      . Auto Regressive Model (정상시계열)<br/>
                      . AR(p) : p 시점 이전의 자료가 현재 자료에 영향을 주는 모형<br/>
                      → '<span className="highlight-text font-bold">자기 자신의 과거 값</span>' + '<span className="highlight-text font-bold">백색 잡음의 현재 값</span>'으로 구성<br/>
                      <span className="text-small" style={{color: '#555'}}>※ 백색잡음 : 시계열 모형의 오차항 의미 / 정규분포 시 가우시안 백색잡음</span><br/>
                      <span className="blue-text font-bold">→ 부분자기상관함수(PACF)</span> 통해 p+1차항부터 절단 가능
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">이동평균 모형<br/>(MA)</th>
                    <td>
                      . Moving Average Model (정상시계열)<br/>
                      . MA(q) : q 시점 이전 오차들에서 현재항의 상태 추론<br/>
                      → 유한개의 백색잡음의 결합으로 <span className="highlight-text font-bold">정상성 항상 만족</span><br/>
                      <span className="blue-text font-bold">→ 자기상관함수(ACF)</span> 통해 q+1차항부터 절단 가능
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">자기회귀<br/>누적이동평균<br/>(ARIMA)</th>
                    <td>
                      . Auto-Regressive Integrated Moving Average<br/>
                      . 자기회귀 + 이동평균 (비정상시계열) → <span className="highlight-text font-bold">차분 통해 정상화 가능</span><br/>
                      . ARIMA (p, d, q) → p : AR 차수 / d : 차분 / q : MA 차수<br/>
                      <br/>
                      - ARIMA (3, 2, 4) 모형에서 두 번 차분 시 ARMA 모형 변환 가능<br/>
                      - ARIMA (0, 2, 4)는 IMA (2, 4) 표현 가능 → 두 번 차분 시 MA(4)<br/>
                      - ARIMA (3, 1, 0)은 ARI (3, 1) 표현 가능 → 한 번 차분 시 AR(3)
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">이동 평균법</th>
                    <td>
                      . 일정 기간별 이동평균을 통해 추세 파악 후 다음 기간 데이터 예측<br/>
                      → 일정 기간의 관측치에 <span className="highlight-text font-bold">모두 동일 가중치 부여</span> (추세, 주기)
                    </td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">지수 평활법</th>
                    <td>
                      . 일정기간이 아닌 모든 시계열 자료를 사용해 평균 계산<br/>
                      . 단기간에 발생되는 불규칙한 변동 평활하는 방법<br/>
                      → 최근 관측치에 더 <span className="highlight-text font-bold">높은 가중치 부여</span> (최신 변동 민감)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">분해시계열 : 시계열에 영향을 주는 요인을 시계열에서 분리해 분석하는 방법</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th style={{width: '20%', backgroundColor: '#f5f5f5'}}>추세 요인</th>
                    <td>자료가 오르거나 내리는 추세, 선형, 이차식 형태, 지수적 형태</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>계절 요인</th>
                    <td>고정된 주기(요일/월/분기)에 따른 자료의 변화</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>순환 요인</th>
                    <td>알려지지 않은 주기로 자료가 변화 (경제, 사회적 요인)</td>
                  </tr>
                  <tr>
                    <th style={{backgroundColor: '#f5f5f5'}}>불규칙 요인</th>
                    <td>위 3가지 요인으로 설명할 수 없는 오차에 해당하는 요인</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '1rem', color: '#999'}}>- 8 -</div>
          </div>
        </div>
      </div>
        </>
      )}
      
    </div>
  );
};

export default Adsp;
