      {/* =========================================================
                             PAGE 2 - 2
          ========================================================= */}
      <div className="adsp-page" style={{marginTop: '2rem'}}>
        <div className="adsp-content">
          {/* Page 2-2 Left Column */}
          <div className="adsp-col">
            <div className="adsp-section">
              <div className="adsp-section-title">분석 프로젝트 : <span style={{fontWeight: 'normal', fontSize: '1rem'}}>비즈니스 영역과 데이터 영역의 현황 파악 / 구성원과 협업 중요</span></div>
              <div className="text-small text-center" style={{marginBottom: '0.5rem'}}>애자일(Agile) 프로젝트 관리 방식 / 분석 과제 정의서 기반 프로젝트 수행</div>
              
              <div style={{fontWeight: 'bold', marginBottom: '0.3rem'}}>☆ 분석 과제 정의서</div>
              <div className="text-small" style={{marginLeft: '0.5rem', marginBottom: '1rem'}}>
                - 분석에 필요한 소스 데이터, 분석 방법, 데이터 입수 및 분석 난이도, 분석 수행주기, 분석 결과에 대한 검증 등을 정의<br/>
                - 이해관계자들의 프로젝트 방향 설정 및 성공 여부 판단의 명확한 기준 작성
              </div>
              
              <StarIcon />
              <div style={{fontWeight: 'bold', marginBottom: '0.3rem'}}>■ 분석 과제 주요 특징 5가지</div>
              <div className="text-small highlight-text" style={{marginLeft: '0.5rem'}}>
                - 데이터 크기 / 데이터 복잡성 / 속도 / 분석 복잡성 / 정확도 및 정밀도
              </div>
              <div className="text-small" style={{display: 'flex', justifyContent: 'space-between', padding: '0 0.5rem', marginBottom: '1rem', color: '#555'}}>
                <span>Data size</span>
                <span>Data Complexity</span>
                <span>Speed</span>
                <span style={{textAlign: 'center'}}>Analytic<br/>Complexity</span>
                <span>Accuracy & Precision</span>
              </div>
              
              <div className="text-small" style={{marginLeft: '0.5rem'}}>
                * 정확도(Accuracy): 높을수록 모델과 실제 값 사이의 차이가 적음<br/>
                * 정밀도(Precision): 높을수록 모델을 지속 반복했을 때의 결과 편차가 적음<br/>
                → '정확도'와 '정밀도' 간에 Trade-off 관계 존재 (정확도 ↔ 복잡도 마찬가지)<br/>
                → 분석의 활용 측면에서는 Accuracy 중요, 안정성 측면에선 Precision 중요
              </div>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">분석 프로젝트 관리 방안 10가지</div>
              <div className="text-small" style={{marginLeft: '0.5rem'}}>
                - 시간 / 범위 / 품질 / 통합 / 이해관계자 / 자원 / 원가 / 리스크 / 조달 / 의사소통
              </div>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">분석 마스터 플랜</div>
              <div className="text-small" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '0.5rem'}}>
                <div style={{color: '#1565c0'}}>전략적 중요도 / 실행용이성 / ROI</div>
                <div>↑</div>
                <div>- 데이터 분석 과제 도출 → <span style={{textDecoration: 'underline'}}>과제 우선순위</span> 결정 → 적용 우선순위 결정</div>
                <div>→ 분석 구현 로드맵 수립 <span style={{marginLeft: '1rem'}}>(<span style={{textDecoration: 'underline'}}>적용 범위/방식 고려</span>)</span></div>
                <div style={{color: '#1565c0'}}>업무 내재화 / 분석 데이터 / 기술 적용 수준</div>
              </div>
              <div className="text-small text-center">* 모델링 단계만 반복적으로 수행하는 혼합형 주로 적용</div>
            </div>

            <div className="adsp-section">
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>★ ISP (Information Strategy Planning / 정보 전략 계획)</div>
              <div className="text-small" style={{marginLeft: '0.5rem'}}>
                - 전략적 주요 정보를 대상으로 <span className="highlight-text" style={{textDecoration: 'underline'}}>전사적인 종합추진 계획</span> / <span className="highlight-text">중장기 마스터 플랜 수립</span>
              </div>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">분석 우선순위 평가 기준</div>
              <ul className="adsp-ul" style={{marginLeft: '0.5rem', marginBottom: '1rem'}}>
                <li className="bullet-none">. <span className="font-bold">시급성 :</span> <span className="blue-text font-bold">전략적 중요도</span> / 목표 가치 → 비즈니스 효과 (Return) : <span className="highlight-text">Value</span></li>
                <li className="bullet-none">. <span className="font-bold">난이도 :</span> 데이터 획득, 저장, 가공 비용 / 분석 적용 비용 / 분석 수준<br/>
                  <div style={{marginLeft: '1.5rem'}}>→ 투자비용 요소 (Investment) : Volume, Variety, Velocity</div>
                </li>
              </ul>
              
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40px'}}>
                  <div>어려움</div>
                  <div>↑</div>
                  <div className="font-bold" style={{writingMode: 'vertical-rl', margin: '0.5rem 0'}}>난이도</div>
                  <div>↓</div>
                  <div>쉬움</div>
                </div>
                <div style={{flex: 1, border: '2px solid #ccc', padding: '1rem', position: 'relative', minWidth: '100px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '2rem'}}>
                    <div style={{textAlign: 'center'}}>1</div>
                    <div style={{textAlign: 'center', color: '#e53935'}}>2<br/><span style={{fontSize: '0.7rem'}}>(우선순위 ♥)</span></div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div style={{textAlign: 'center', color: '#1565c0'}}>3<br/><span style={{fontSize: '0.7rem'}}>(우선순위 ▲)</span></div>
                    <div style={{textAlign: 'center'}}>4</div>
                  </div>
                </div>
                <div style={{flex: 1.5}}>
                  <div>. 시급성 우선 시 : <span className="highlight-text font-bold">3 → 4 → 2</span></div>
                  <div style={{marginTop: '0.5rem'}}>. 난이도 우선 시 : <span className="highlight-text font-bold">3 → 1 → 2</span></div>
                  <div className="text-small" style={{marginTop: '0.5rem', color: '#555', wordBreak: 'keep-all'}}>
                    ※ 시급성 높으나 난이도가 높은 과제(1 영역)도<br/>경영진 의사결정에 따라 우선순위 조정 가능
                  </div>
                </div>
              </div>
              <div className="text-center font-bold text-small" style={{marginTop: '0.5rem', paddingRight: '30%'}}>현재 ← 시급성 → 미래</div>
            </div>

            <div className="adsp-section">
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>★ 로드맵 : 과제 계획서로 목표 달성을 위한 방향 및 일정을 시각적으로 표현한 문서</div>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">분석 거버넌스 체계 : <span style={{fontWeight: 'normal', fontSize: '1rem'}}>의사결정을 위한 데이터 분석과 활용을 위한 관리체계</span></div>
              <div className="text-small" style={{marginLeft: '0.5rem'}}>
                - 구성 요소 : 프로세스 (Process) / 조직 (Organization) / 시스템 (System)<br/>
                <div style={{textAlign: 'center', marginTop: '0.5rem'}}>
                  <span style={{textDecoration: 'underline'}}>인적 자원 (Human resource)</span> / <span style={{textDecoration: 'underline'}}>데이터 (Data)</span><br/>
                  <span className="blue-text">분석 관련 교육 / 마인드 육성 체계</span> <span className="blue-text" style={{marginLeft: '1rem'}}>데이터 거버넌스</span>
                </div>
              </div>
            </div>

            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">데이터 분석 조직 구조</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-orange" style={{width: '25%'}}>집중형 조직</th>
                    <td>. 별도 독립적 분석 조직 구성 (조직 내 분석 업무 일괄 담당)<br/>→ 전사 차원에서 전략적 중요도에 따라 우선순위 결정<br/>→ 협업 부서와 중복 업무 가능성</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">기능 중심 조직</th>
                    <td>. 별도 독립 조직 없이 각 해당 부서에서 직접 분석<br/>→ 전사적 관점 분석 관리 어려움</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">분산 조직</th>
                    <td>. 독립적 분석 조직의 인력을 협업부서에 배치시켜 업무 수행<br/>→ 분석 결과의 신속한 실무적용 가능</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">분석 과제 관리 프로세스</div>
              <ul className="adsp-ul text-small" style={{marginLeft: '0.5rem'}}>
                <li className="bullet-none">. 과제 발굴 : 분석 아이디어 발굴 / 과제 후보 제안 / 분석 과제 확장</li>
                <li className="bullet-none">. 과제 수행 : 팀 구성 / 분석 과제 실행 / 분석 과제 진행 관리 / 결과 공유 및 개선<br/>
                  → 분석 과제 진행 간 시사점과 분석 결과물들은 풀(Pool)에 축적하여 관리
                </li>
              </ul>
            </div>
            
            <div style={{textAlign: 'center', marginTop: '1rem', color: '#999'}}>- 4 -</div>
          </div>

          {/* Page 2-2 Right Column */}
          <div className="adsp-col">
            <div className="adsp-section">
              <StarIcon />
              <div className="adsp-section-title">데이터 분석 수준 진단</div>
              <div className="font-bold" style={{marginBottom: '0.5rem'}}>1. 데이터 분석 준비도 (Readiness)</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-green" style={{width: '25%'}}>분석 업무 파악</th>
                    <td>사실 분석 / <span className="highlight-text">예측 / 시뮬레이션 / 최적화</span> / 분석 업무 정기적 개선</td>
                  </tr>
                  <tr>
                    <th className="bg-green">인력 및 조직</th>
                    <td>분석 전문가 / 관리자 분석 능력 / 분석 업무 조직 / 경영진 이해</td>
                  </tr>
                  <tr>
                    <th className="bg-green">분석 기법</th>
                    <td>적절한 분석 기법 / 분석 기법 라이브러리, 평가, 정기적 개선</td>
                  </tr>
                  <tr>
                    <th className="bg-green">분석 데이터</th>
                    <td>데이터 관리 / 외부 데이터 활용 / 기준데이터 관리 (MDM)</td>
                  </tr>
                  <tr>
                    <th className="bg-green">분석 문화</th>
                    <td>사실 기반 의사결정 / 회의에서 데이터 활용 / 데이터 공유 및 협업 / 관리자의 데이터 중요성 인지</td>
                  </tr>
                  <tr>
                    <th className="bg-green">IT 인프라</th>
                    <td><span className="blue-text">운영 시스템 데이터 통합 / 분석 환경</span></td>
                  </tr>
                </tbody>
              </table>
              
              <div className="font-bold" style={{marginTop: '1rem', marginBottom: '0.5rem'}}>2. 데이터 분석 성숙도 (Maturity)</div>
              <div className="text-small" style={{marginBottom: '0.5rem'}}>- CMMI 모델 기반 평가 / <span className="blue-text">비즈니스, 조직 및 역량, IT 부문</span> 관점으로 구분</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-orange" style={{width: '20%'}}>도입</th>
                    <td>. 환경, 시스템 구축 / 데이터 웨어하우스, 데이터 마트, ETL, OLAP</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">활용</th>
                    <td>. 분석 결과 업무에 적용 / 실시간 대시보드, 통계분석 환경</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">확산</th>
                    <td>. 전사 차원 분석 관리 및 공유 / 비주얼 분석, 분석 전용 서버</td>
                  </tr>
                  <tr>
                    <th className="bg-orange">최적화</th>
                    <td>. 혁신 및 성과 향상에 기여 / 분석 Sandbox, 프로세스 내재화, 빅데이터</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">데이터 분석 성숙도 모델</div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 0', position: 'relative', borderBottom: '1px solid #ccc', borderLeft: '1px solid #ccc', margin: '2rem 1rem 1rem 2rem', paddingBottom: '0.5rem'}}>
                <div style={{position: 'absolute', left: '-2.5rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '0.8rem'}}>
                  <div>높음</div>
                  <div>↑</div>
                  <div className="font-bold">준비도</div>
                  <div>↓</div>
                  <div>낮음</div>
                </div>
                <div style={{position: 'absolute', bottom: '-1.5rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem'}}>
                  낮음 ← <span className="font-bold">성숙도</span> → 높음
                </div>
                
                <table style={{width: '80%', height: '120px', textAlign: 'center', borderCollapse: 'collapse', backgroundColor: 'transparent'}}>
                  <tbody>
                    <tr>
                      <td style={{borderRight: '1px dashed #999', borderBottom: '1px dashed #999', width: '50%'}}>정착형</td>
                      <td style={{borderBottom: '1px dashed #999', color: '#e53935'}}>확산형</td>
                    </tr>
                    <tr>
                      <td style={{borderRight: '1px dashed #999', color: '#1565c0'}}>준비형</td>
                      <td>도입형</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div style={{position: 'relative', marginTop: '2rem'}}>
                <StarIcon />
                <table className="adsp-table">
                  <tbody>
                    <tr>
                      <th className="bg-blue" style={{width: '20%'}}>준비형</th>
                      <td>데이터, 조직, 분석업무, 분석기법 등 미적용되어 사전 준비 필요</td>
                    </tr>
                    <tr>
                      <th className="bg-blue">정착형</th>
                      <td>데이터, 조직, 분석업무, 분석기법 등을 내부에서 제한적으로 사용</td>
                    </tr>
                    <tr>
                      <th className="bg-blue">도입형</th>
                      <td>분석업무 및 기법이 부족하나 조직 및 인력 등 준비도는 높은 상황</td>
                    </tr>
                    <tr>
                      <th className="bg-blue">확산형</th>
                      <td>6가지 분석 구성요소 갖춘 상태 / 지속적 확산 가능</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-small" style={{marginTop: '0.5rem'}}>
                ▶ 분석 지원 인프라 방안 수립 : 확장성을 고려한 플랫폼 시스템 적용 (중앙집중적)
              </div>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">데이터 거버넌스 : <span style={{fontWeight: 'normal', fontSize: '1rem'}}>전사 차원의 데이터 관리 체계 구축</span></div>
              <ul className="adsp-ul text-small" style={{marginLeft: '0.5rem', marginBottom: '0.5rem'}}>
                <li className="bullet-none">- 구성 요소 : <span className="highlight-text">원칙 / 조직 / 프로세스</span></li>
                <li className="bullet-none">- 관리 대상 : 마스터 데이터, 메타데이터, 데이터 사전</li>
              </ul>
              
              <div style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>. 데이터 거버넌스 체계 요소</div>
              <table className="adsp-table">
                <tbody>
                  <tr>
                    <th className="bg-yellow" style={{width: '30%'}}>데이터 표준화</th>
                    <td>데이터 표준용어 설정, 명명 규칙 수립,<br/><span className="blue-text">메타데이터 및 데이터 사전 구축</span></td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">데이터 관리체계</th>
                    <td><span className="blue-text">효율적 데이터 관리를 위한 관리 원칙 수립</span></td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">데이터 저장소관리</th>
                    <td>전사 차원의 <span className="blue-text">저장소 구성</span></td>
                  </tr>
                  <tr>
                    <th className="bg-yellow">표준화 활동</th>
                    <td>거버넌스 체계 구축 후 <span className="blue-text">표준 준수 여부를 주기적 점검</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="adsp-section">
              <div className="adsp-section-title">빅데이터 거버넌스</div>
              <div className="text-small" style={{marginLeft: '0.5rem'}}>
                - 기존 데이터 거버넌스 체계에 빅데이터의 효율적 관리, 다양한 데이터 관리 체계, 데이터 최적화, 정보 보호, 데이터 카테고리 별 관리자 책임자 지정 등을 포함
              </div>
            </div>

          </div>
        </div>
      </div>
      </>
