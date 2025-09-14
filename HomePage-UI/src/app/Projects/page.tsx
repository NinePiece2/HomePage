"use client"

import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Sort,
    Inject
} from '@syncfusion/ej2-react-grids';
import { useEffect, useState} from 'react';
import "./syncfusion-grid.css";
import { Application } from '@/types/types';
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";


const linkLabels: Record<keyof Application, string> = {
  gitHubLink: "GitHub",
  applicationLink: "App Link",
  homePageLink: "Portfolio Link",
  name: "Name", 
};

const linkTemplate = (linkField: keyof Application) => {
  const TemplateComponent = (props: Application) => {
    if (props[linkField]) {
      return (
        <a
          href={props[linkField]!}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:underline"
        >
          {linkLabels[linkField]}
        </a>
      );
    } else {
      return <p className="text-sm text-gray-400">N/A</p>;
    }
  };

  TemplateComponent.displayName = `${linkField}Template`; // To fix compiler issue
  return TemplateComponent;
};

export default function Projects() {
    const [projectsData, setProjectsData] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/proxy/Projects/TableData");
            if (!res.ok) {
                throw new Error(`HTTP error: ${res.status}`);
            }
            const data: Application[] = await res.json();
            setProjectsData(data);
        } catch (err) {
            console.error("Failed to fetch projects:", err);
            setError("Could not load project data");
        } finally {
            setLoading(false);
        }
        };

        fetchProjects();
    }, []);

    if (loading){
        return (<motion.div
          key="loading"
          className="min-h-screen bg-[#151515] flex items-center justify-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="flex items-center gap-2 text-lg animate-pulse">
            <BookOpen size={24} className="text-emerald-500" />
            Loading projects table...
          </p>
        </motion.div>);
    } 
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className='bg-[#151515] h-[87vh]'>
        <div className="container p-4 mx-auto">
            <div className="flex flex-col items-center justify-center min-h-[20vh] p-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="flex items-center justify-center gap-3 text-4xl font-extrabold tracking-tight text-emerald-400">
                    <BookOpen size={36} className="text-emerald-500" />
                    Projects
                    </h1>
                    <p className="mt-3 max-w-xl text-lg text-gray-300 leading-relaxed">
                    Explore some of the bigger projects I’ve worked on. Each entry includes
                    links to the GitHub repo, deployed app, and portfolio for more details.
                    </p>
                </motion.div>
            </div>

            <div className="relative">
              <p className="text-sm text-gray-400 mb-2 block sm:hidden text-center">
                👉 Swipe to see the rest of the table
              </p>

              <div className="overflow-x-auto sm:overflow-x-visible">
                <GridComponent
                  dataSource={projectsData}
                  allowSorting={true}
                  allowPaging={true}
                  pageSettings={{ pageSize: 12, pageCount: 5 }}
                >
                  <ColumnsDirective>
                    <ColumnDirective
                      field="name"
                      headerText="Name"
                      width="170"
                      headerTextAlign="Center"
                      textAlign="Center"
                    />
                    <ColumnDirective
                      headerText="GitHub Link"
                      width="150"
                      headerTextAlign="Center"
                      textAlign="Center"
                      template={linkTemplate("gitHubLink")}
                    />
                    <ColumnDirective
                      headerText="Application Link"
                      width="150"
                      headerTextAlign="Center"
                      textAlign="Center"
                      template={linkTemplate("applicationLink")}
                    />
                    <ColumnDirective
                      headerText="Home Page Link"
                      width="150"
                      headerTextAlign="Center"
                      textAlign="Center"
                      template={linkTemplate("homePageLink")}
                    />
                  </ColumnsDirective>
                  <Inject services={[Page, Sort]} />
                </GridComponent>
              </div>
            </div>
          </div>
        </div>
    );
}